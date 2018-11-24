import React from "react";
import { Link } from "react-router-dom";
import "./paginationButton.css";

export const PaginationButton = ({ path, name }) => {
  <div className="pag-button-wrapper">
    <Link className="pag-button" to={`/artists/${path}`}>
      {name}
    </Link>
  </div>;
};
