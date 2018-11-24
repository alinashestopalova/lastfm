import React from "react";

const getStyleForLink  = parameter => parameter ? {textDecoration:'none'} : {textDecoration:'underlined'}

export const Link = ({name,paramForUnderline,path}) => <Link to={`/${path}`} style={getStyleForLink(paramForUnderline)}>{name}</Link>