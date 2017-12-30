import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      return dispatch(userActions.logOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
