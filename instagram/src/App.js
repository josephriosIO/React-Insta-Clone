import React, { Component } from "react";
import "./App.css";

// data for dummy users
import dummyData from "./dummy-data";

import PostsPages from "./components/PostContainer/PostsPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: dummyData
    };
  }

  render() {
    return <PostsPages data={this.state.data} />;
  }
}

export default App;
