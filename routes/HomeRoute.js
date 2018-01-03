import React from "react";
import { StackNavigator } from "react-navigation";
import { Image } from "react-native";
import NavButton from "../components/NavButton";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const HomeRoute = StackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 35 }}
            resizeMode={"contain"}
          />
        ),
        headerLeft: (
          <NavButton
            iconName={"ios-camera-outline"}
            onPress={() => navigation.navigate("TakePhoto")}
          />
        )
      })
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default HomeRoute;
