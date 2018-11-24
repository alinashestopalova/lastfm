import React from "react";
import { Link } from "react-router-dom";
import { getStyleForLink } from '../../helpers/index'

export const Link = ({name,paramForUnderline,path}) => <Link to={`/${path}`} style={getStyleForLink(paramForUnderline)}>{name}</Link>