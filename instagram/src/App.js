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

  addComment = comment => {
    const copy = this.state.data.slice();
    const newComment = {
      id: Date.now(),
      username: "joseph",
      text: comment
    };
    copy.push(newComment);

    this.setState({ data: copy });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts addComment={this.addComment} posts={this.state.data} />
      </div>
    );
  }
}

export default App;
