import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as photoActions } from "../../redux/modules/photo";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect(mapStateToProps)(AppContainer);
