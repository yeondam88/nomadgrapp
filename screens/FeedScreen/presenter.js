import React from "react";
import { View, Text } from "react-native";

const FeedScreen = props => (
  <Text onPress={() => props.navigation.navigate("Likes")}>Feed Screen</Text>
);

export default FeedScreen;
