import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions
} from "react-native";
import SquarePhoto from "../../components/SquarePhoto";

const { width } = Dimensions.get("window");

const NotificationsScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    <View style={styles.container}>
      {props.notifications.length === 0 && props.notifications.length > 1 ? (
        <Text style={styles.notFound}>
          No notifications yet! Come back soon!
        </Text>
      ) : (
        props.notifications.map(notification => (
          <SquarePhoto key={notification.id} imageURL={notification.file} />
        ))
      )}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  notFound: {
    color: "#bbb",
    fontWeight: "600",
    alignSelf: "center",
    textAlign: "center",
    width,
    marginTop: 20
  }
});

NotificationsScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  search: PropTypes.array.isRequired
};

export default NotificationsScreen;
