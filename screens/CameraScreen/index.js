import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  CameraRoll
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera, Permissions } from "expo";

class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: Camera.Constants.FlashMode.off,
    pictureTaken: false,
    picture: null
  };

  componentWillMount = async () => {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: camera.status === "granted" });
  };

  render() {
    const { hasCameraPermission, type, flash } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No Access to Camera, check your settings</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={camera => (this.camera = camera)}
          >
            <TouchableOpacity>
              <View style={styles.actions}>
                <MaterialIcons
                  name={
                    type === Camera.Constants.Type.back
                      ? "camera-front"
                      : "camera-rear"
                  }
                  color="white"
                  size={40}
                />
              </View>
            </TouchableOpacity>
          </Camera>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.button} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  camera: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "#bbb",
    borderWidth: 15,
    borderRadius: 50
  },
  actions: {
    backgroundColor: "transparent",
    height: 40,
    width: 40,
    margin: 10
  }
});

export default CameraScreen;
