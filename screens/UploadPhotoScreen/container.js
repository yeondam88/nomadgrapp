import React, { Component } from "react";
import PropTypes from "prop-types";
import UploadPhotoScreen from "./presenter";

class Container extends Component {
  static propTypes = {};
  render() {
    return <UploadPhotoScreen />;
  }
}

export default Container;
