import React from "react";
import PropTypes from "prop-types";
import './searchField.css';

export const SearchField = ({placeholder}) => <input className='input-field' placeholder={placeholder}/>


SearchField.defaultProps = {
    placeholder:'placeholder is empty'
  };
  
SearchField.propTypes = {
    placeholder:PropTypes.string.isRequired
};