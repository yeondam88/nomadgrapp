import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateToProps = state => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps, null)(AppContainer);
