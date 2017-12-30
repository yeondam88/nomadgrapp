import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet, Button } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };
  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          <View style={styles.div}>
            <Text>You are logged in{JSON.stringify(this.props)}</Text>

            <Button onPress={this.props.logOut} title="LogOut">
              LogOut
            </Button>
          </View>
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  div: {
    display: "flex"
  }
});

export default AppContainer;
