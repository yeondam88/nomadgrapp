import { StackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfieRoute = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ screenProps }) => ({
        headerTitle: screenProps.username
      })
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default ProfieRoute;
