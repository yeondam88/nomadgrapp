import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  static propTypes = {
    profileObject: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired
  };

  state = {
    isFetching: true,
    mode: "grid"
  };

  componentDidMount = () => {
    const { profileObject } = this.props;
    if (profileObject) {
      this.setState({
        isFetching: false
      });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.profileObject) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    const { isFetching, mode } = this.state;
    return (
      <Profile
        {...this.props}
        mode={mode}
        isFetching={isFetching}
        changeToGrid={this._changeToGrid}
        changeToList={this._changeToList}
      />
    );
  }

  _changeToGrid = () => {
    this.setState({ mode: "grid" });
  };

  _changeToList = () => {
    this.setState({ mode: "list" });
  };
}

export default Container;
