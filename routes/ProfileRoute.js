import { StackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfieRoute = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default ProfieRoute;
