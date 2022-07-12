import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "react-native";

import Swiper from "react-native-swiper";

const InitialScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/pngwing.png")}
        resizeMode="cover"
        style={styles.rect2}
      ></Image>

      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={150}
          activeDotColor="#FF6347"
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/dst.png")}
              resizeMode="contain"
              style={styles.sliderImage1}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/iari.png")}
              resizeMode="contain"
              style={styles.sliderImage2}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/ggsipu.png")}
              resizeMode="contain"
              style={styles.sliderImage3}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logoiot.png")}
            resizeMode="contain"
            style={styles.logoimage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.plantiot}>Welcome To</Text>
            <Text style={styles.plantiot1}>PlantIoT-IPU</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Camera" onPress={() => navigation.navigate("Crop")} />
      </View>
      <View style={styles.buttonStyle1}>
        <Button title="IoT" onPress={() => navigation.navigate("Iot")} />
      </View>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  rect2: {
    height: 600,

    position: "absolute",
    opacity: 0.7,
    // zIndex: 1,
  },
  sliderContainer: {
    width: 330,
    height: 150,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    marginTop: 30,
    marginLeft: 12,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10,
  },
  sliderImage1: {
    height: "100%",
    width: "50%",
    alignSelf: "center",
  },
  sliderImage2: {
    height: "100%",
    width: "60%",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  sliderImage3: {
    height: "100%",
    width: "50%",
    alignSelf: "center",
  },
  // sliderImage: {
  //   height: '100%',
  //   width: '50%',
  //   alignSelf: 'center',
  //   borderRadius: 8,
  //   justifyContent:'space-between'

  // },

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    resizeMode: "contain"
  },
  logoimage: {
    alignSelf: "center",
    width: "50%",
    backgroundColor: "transparent",
  },
  plantiot: {
    alignSelf: "center",
    fontSize: 22,
  },
  plantiot1: {
    alignSelf: "center",
    width: "100%",
    color: "red",
    fontSize: 40,
    marginLeft: "40%",
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 70,
    marginRight: 50,
    borderWidth: 2,
    borderRadius: 20,
    // borderColor:'#F31801',
    overflow: "hidden",
    marginBottom: 10,
    width: 100,
  },
  buttonStyle1: {
    // marginTop:20,

    marginLeft: 200,
    borderWidth: 2,
    borderRadius: 20,
    // borderColor:'#F31801',
    overflow: "hidden",
    marginTop: -50,
    width: 100,
  },
  textContainer: {
    bottom: 20,
  },
});
