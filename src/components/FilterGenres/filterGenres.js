import React from "react";
import PropTypes from "prop-types";

import "./filterGenres.css";

export const FilterGenres = ({callback,listOfGenres}) => {
  <select className='select-filter-genres' ref={input => (this._select = input)} onChange={() => callback(this._select.value)}>
    <option defaultValue value="" />
    {
        listOfGenres.map(element => <option value={element.value}>element.name</option>)
    }
  </select>;
};

FilterGenres.defaultProps = {
    callback:function(){ alert('callback is undefined')},
    listOfGenres:[]
  };
  
FilterGenres.propTypes = {
    callback:PropTypes.func.isRequired,
    listOfGenres:PropTypes.array.isRequired
};