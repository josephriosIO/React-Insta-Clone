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
      data: [],
      filter: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  search = e => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filter: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} />
        <Posts
          postsData={
            this.state.filter.length > 0 ? this.state.filter : this.state.data
          }
        />
      </div>
    );
  }
}

export default App;
