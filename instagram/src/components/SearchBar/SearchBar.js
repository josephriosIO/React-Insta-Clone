import React from "react";
// styling
import "./SearchBar.css";
import logo from "./logo.png";

const SearchBar = props => {
  // sign out function
  const signOut = () => {
    // clearing the local localStorage to get the illusion of a sign out
    localStorage.clear();
  };
  return (
    <nav className="search-bar">
      <h1 className="logo">
        <i className="fab fa-instagram " /> | <img src={logo} alt="broken" />{" "}
      </h1>
      <form>
        {/* on the key down so it registers every key*/}
        <input type="search" onKeyDown={props.search} placeholder="Search" />
        {/* button that calls the sign out function on a click*/}
        <button className="log-out" onClick={signOut}>
          Logout
        </button>
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
