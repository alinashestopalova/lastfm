import React from "react";
import "./middleImage.css";

export const MiddleImage = ({ image }) => {
  return <div className='middle-image' style={{backgroundImage:`${image}`}} />;
};
