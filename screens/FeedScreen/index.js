import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoAction } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoAction.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
