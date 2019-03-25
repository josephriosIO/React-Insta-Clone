import React, { Component } from "react";
import "./App.css";

// data for dummy users
import dummyData from "./dummy-data";
// search bar
import SearchBar from "./components/SearchBar/SearchBar";

//posts
import Posts from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts posts={this.state.data} />
      </div>
    );
  }
}

export default App;
