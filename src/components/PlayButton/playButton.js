import React from "react";
import "./playButton.css";

export const PlayButton = ({ isPlaying, callback }) => {
  <div className="icon-wrapper" onClick={() => callback(!isPlaying)}>
    <div className="icon-image" />
  </div>;
};

import PropTypes from "prop-types";
FilterGenres.defaultProps = {
  isPlaying: false,
  callback: function() {
    alert("callback is undefined");
  }
};

FilterGenres.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired
};
