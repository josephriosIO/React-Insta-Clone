import React from "react";
// styling
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <nav className="search-bar">
      <h1>
        <i class="fab fa-instagram" /> | Instagram{" "}
      </h1>
      <input placeholder="Search" />
      <div className="buttons">
        <i class="far fa-compass fa-2x" />
        <i class="far fa-heart fa-2x" />
        <i class="far fa-user fa-2x" />
      </div>
    </nav>
  );
};

export default SearchBar;
