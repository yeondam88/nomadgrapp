import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FadeIn from "react-native-fade-in-image";

const Photo = props => (
  <View>
    <TouchableOpacity>
      <View>
        <FadeIn>
          <Image
            source={
              props.creator.profile_image
                ? {
                    uri: props.creator.profile_image
                  }
                : require("../../assets/images/noPhoto.jpg")
            }
          />
        </FadeIn>
      </View>
      <View>
        <Text>{props.creator.username}</Text>
        {props.location && <Text>{props.location}</Text>}
      </View>
    </TouchableOpacity>
    <FadeIn>
      <Image source={{ uri: props.file }} />
    </FadeIn>
    <View>
      <View>
        <Text>{props.creator.username}</Text>
      </View>
    </View>
  </View>
);

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired
};

export default Photo;
