import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import { Ionicons } from "@expo/vector-icons";

const TabsNavigation = TabNavigator(
  {
    Home: {
      screen: HomeRoute
    },
    Search: {
      screen: SearchRoute
    },
    Notifications: {
      screen: NotificationsRoute
    },
    Profile: {
      screen: ProfileRoute
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      }
    }
  }
);

export default TabsNavigation;
