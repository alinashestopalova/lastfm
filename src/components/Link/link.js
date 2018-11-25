import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getStyleForLink } from '../../helpers/index'

export const Link = ({name,path}) => <Link to={`/${path}`} >{name}</Link>

Link.defaultProps = {
    name:'undefined',
    path:'undefined'
  };
  
Link.propTypes = {
    name:PropTypes.string.isRequired,
    path:PropTypes.string.isRequired
};