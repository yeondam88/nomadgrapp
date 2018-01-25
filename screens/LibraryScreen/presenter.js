import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import FitImage from "react-native-fit-image";
import PropTypes from "prop-types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { height, width } = Dimensions.get("window");

const LibraryScreen = props => (
  <View style={styles.container}>
    <StatusBar hidden={true} />
    {props.photos && (
      <View style={styles.pictureContainer}>
        <FitImage source={{ uri: props.pickedPhoto.node.image.uri }} />
        <TouchableOpacity onPress={props.approvePhoto}>
          <View style={styles.action}>
            <MaterialIcons name="check-circle" color="white" size={40} />
          </View>
        </TouchableOpacity>
      </View>
    )}
    {props.photos && (
      <View style={styles.photos}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {props.photos.map((photo, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => props.pickPhoto(photo)}
            >
              <Image
                source={{ uri: photo.node.image.uri }}
                style={styles.smallPhoto}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )}
  </View>
);

LibraryScreen.propTypes = {
  photos: PropTypes.array.isRequired,
  pickedPhoto: PropTypes.object,
  pickPhoto: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pictureContainer: {
    flex: 2
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  photos: {
    flex: 1
  },
  smallPhoto: {
    width: width / 3,
    height: width / 3
  },
  action: {
    backgroundColor: "transparent",
    height: 40,
    width: 40,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10
  }
});

export default LibraryScreen;
