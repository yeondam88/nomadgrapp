import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, onwProps) => {
  return {
    logOut: () => {
      dispatch(userActions.logOut());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
