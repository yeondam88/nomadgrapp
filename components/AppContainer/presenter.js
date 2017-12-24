import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar } from "react-native";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <View>
        {isLoggedIn ? (
          <Text>You are logged in</Text>
        ) : (
          <Text>I don't know you</Text>
        )}
      </View>
    );
  }
}

export default AppContainer;
