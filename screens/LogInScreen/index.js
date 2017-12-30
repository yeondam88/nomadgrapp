import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      return dispatch(userActions.login(username, password));
    },
    logOut: () => {
      return dispatch(userActions.logOut());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
