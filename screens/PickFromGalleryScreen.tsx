import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as FileSystem from "expo-file-system";

import {
  fetch,
  decodeJpeg,
  bundleResourceIO,
} from "@tensorflow/tfjs-react-native";
import { expandDims } from "@tensorflow/tfjs";
import * as ImagePicker from "expo-image-picker";
import { readFileAssets } from "react-native-fs";

export default function PickImageFromGallery() {
  const [state, setState] = useState(null);
  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      console.log(result);
      setImage(result.uri);
    }
  };

  const fn = async () => {
    try {
      const mobileNetJson = require("../assets/model.json");
      console.log(mobileNetJson.format.toString + "json loaded");
      const mobileNetWeights = require("../assets/weights.bin");
      console.log(mobileNetWeights.toString + "weights loaded");

      await tf.ready();
      const model = await tf.loadGraphModel(
        bundleResourceIO(mobileNetJson, mobileNetWeights)
      );
      const fileUri = image;
      const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;

      const imageData1 = new Uint8Array(imgBuffer);
      const imageTensor1 = decodeJpeg(imageData1).resizeBilinear([224, 224]);

      const expandedImageTensor = expandDims(imageTensor1, 0);
      const res = model.predict(expandedImageTensor) as tf.Tensor;
      res.print();
      const predictedClassNumber = res.reshape([10]).argMax();

      const myResult = tf.util
        .flatten(predictedClassNumber.toString())
        .toString();

      setState(myResult[11]);

      console.log(myResult[11]);
      console.log(state);
      if(state === '0')
      setDisease('Bacterial Spot');
      else if (state === '1')
      setDisease('Early Blight');
      else if (state === '2')
      setDisease('no diseases setected! Healthy!');
      else if (state === '3')
      setDisease('Late Blight');
      else if (state === '4')
      setDisease('Leaf Mold');
      else if (state === '5')
      setDisease('Sptoria Lead Spot');
      else if (state === '6')
      setDisease('Spider Mites');
      else if (state === '7')
      setDisease('Target Spot');
      else if (state === '8')
      setDisease('Tomato Mosaic Virus');
      else if (state === '9')
      setDisease('Tomato Yellow Leaf Curl Virus');
      else 
      setDisease('invalid input');
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {image && <Button title="Predict" onPress={fn}></Button>}
      {image && (
        <Button
          title="Retry"
          onPress={() => {
            setImage(null);
          }}
        ></Button>
      )}
      {disease && <Text>Your plant is {disease}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
