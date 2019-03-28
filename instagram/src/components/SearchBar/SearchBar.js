import React from "react";
// styling
import "./SearchBar.css";
import logo from "./logo.png";

const SearchBar = props => {
  const signOut = () => {
    localStorage.clear()
  }
  return (
    <nav className="search-bar">
      <h1 className="logo">
        <i className="fab fa-instagram " /> | <img src={logo} alt="broken" />{" "}
      </h1>
      <form>
      <input type="search" onKeyDown={props.search} placeholder="Search" />
      <button onClick={signOut}>Logout</button>
      </form>
      <div className="buttons">
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </div>
    </nav>
  );
};

export default SearchBar;
