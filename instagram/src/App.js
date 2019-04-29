import React, { Component } from "react";
import "./App.css";

import withAuthenticate from "./authentication/withAuthenticate";

// data for dummy users
import dummyData from "./dummy-data";

import PostsPages from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

// storing withAuthenticate into a variable to use as a high order component
const ComponentFromWithAuthenticate = withAuthenticate(PostsPages)(Login);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    // renders the HOC
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
