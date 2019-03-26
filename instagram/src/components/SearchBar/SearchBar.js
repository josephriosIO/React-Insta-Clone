import React from "react";
// styling
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <nav className="search-bar">
      <h1>
        <i className="fab fa-instagram" /> | Instagram{" "}
      </h1>
      <input placeholder="Search" />
      <div className="buttons">
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </div>
    </nav>
  );
};

export default SearchBar;