import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const Notification = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("ProfileDetail", { user: props.creator })
      }
    >
      <FadeIn>
        <Image
          source={
            props.creator.profile_image
              ? { uri: props.creator.profile_image }
              : require("../../assets/images/noPhoto.jpg")
          }
          style={styles.avatar}
          defaultSource={require("../../assets/images/noPhoto.jpg")}
        />
      </FadeIn>
    </TouchableOpacity>
    <Text>
      <Text>{props.creator.username}</Text>{" "}
      {props.notification_type === "comment" && `commented: ${props.comment}`}
      {props.notification_type === "like" && `liked your post`}
      {props.notification_type === "follow" && `started following you`}
    </Text>
    {props.notification_type === "follow" ? (
      <TouchableOpacity>
        <View>
          <Text>{props.creator.following ? "Unfollow" : "Follow"}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <Image
        source={{ uri: props.image.file }}
        style={styles.payload}
        defaultSource={require("../../assets/images/photoPlaceholder.png")}
      />
    )}
  </View>
);

Notification.propTypes = {
  commnet: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  creator: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    followers_count: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    following_count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    post_count: PropTypes.number.isRequired,
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    website: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.shape({
    file: PropTypes.string.isRequired
  }).isRequired,
  notification_type: PropTypes.oneOf(["like", "follow", "comment"]).isRequired,
  to: PropTypes.number.isRequired,
  updated_at: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15
  },
  username: {
    fontWeight: "600"
  },
  centerText: {
    marginRight: "auto",
    width: width / 2.5
  },
  payload: {
    height: 50,
    width: 50
  },
  touchable: {
    borderRadius: 3,
    backgroundColor: "#3e99ee"
  },
  button: {
    borderRadius: 3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    overflow: "hidden"
  },
  btnText: {
    fontWeight: "600",
    textAlign: "center",
    color: "white"
  }
});

export default Notification;
