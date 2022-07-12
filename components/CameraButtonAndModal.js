import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import Modal from "react-native-modal";

import Loader from "./Loader";

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isLoading: false,
    };
  }

 

  onShowModal = () => {
    this.setState({
      isVisible: true,
    });
  };

  render() {
    return (
      <View style={styles.rect5Stack}>
        <Loader isLoading={this.state.isLoading} />
        <TouchableOpacity
          style={styles.rect5}
          onPress={() => {
            //this.props.navigation.navigate('Heal');
            this.onShowModal();
          }}
        >
          <Text style={styles.takeAPicture}>Take Picture</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/photography.png")}
          resizeMode="contain"
          style={styles.image8}
        ></Image>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Choose</Text>
              <View style={styles.modalBody}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("CameraScreen");
                    // this.onShowModal();
                  }}
                >
                  <Image
                    source={require("../assets/photo.png")}
                    resizeMode="contain"
                    style={styles.modalImage1}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate("PickImageFromGallery")
                }}>
                  <Image
                    source={require("../assets/memories.png")}
                    resizeMode="contain"
                    style={styles.modalImage2}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.cameraRow}>
                <Text style={styles.camera}>Camera</Text>
                <Text style={styles.gallery}>Gallery</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ isVisible: false })}
              >
                <Text style={styles.modalCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rect5Stack: {
    width: 201,
    height: 44,
    marginTop: 9,
    marginLeft: 19,
  },
  rect5: {
    top: 25,
    left: 0,
    width: 201,
    height: 43,
    position: "absolute",
    backgroundColor: "#195F57",
    borderRadius: 56,
  },
  takeAPicture: {
    fontFamily: "sans-serif",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 13,
    marginLeft: 84,
  },
  image8: {
    top: 22,
    left: 25,
    width: 25,
    height: 45,
    position: "absolute",
  },
  modalView: {
    width: 239,
    height: 157,
    backgroundColor: "white",
    borderRadius: 17,

    alignSelf: "center",
  },
  modalHeader: {
    fontFamily: "sans-serif",
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 14,
  },
  modalBody: {
    height: 30,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 55,
    marginRight: 54,
  },
  modalImage1: {
    width: 50,
    height: 50,
    bottom: 9,
    right: 10,
  },
  modalImage2: {
    width: 50,
    height: 50,
    marginLeft: 40,
    bottom: 10,
  },
  cameraRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 45,
    marginRight: 48,
  },
  camera: {
    fontFamily: "sans-serif",
    color: "#121212",
    top: 5,
    left: 2,
  },
  gallery: {
    fontFamily: "sans-serif",
    color: "#121212",
    marginLeft: 59,
    top: 5,
  },
  modalCancel: {
    fontFamily: "sans-serif",
    color: "red",
    marginTop: 20,
    marginLeft: 180,
  },
});
