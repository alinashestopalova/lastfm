import React from "react";
import './playButton.css'

export const PlayButton = ({ isPlaying, callback }) => {
  <div className="icon-wrapper" onClick={() => callback(!isPlaying)}>
    <div className="icon-image" />
  </div>
};
