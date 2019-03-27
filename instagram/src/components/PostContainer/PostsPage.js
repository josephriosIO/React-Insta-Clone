import React, { Component } from "react";
// data for dummy users
import dummyData from "./dummy-data";
// search bar
import SearchBar from "../SearchBar/SearchBar";

//posts
import Posts from "../PostContainer/PostContainer";

class PostsPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dummyData,
      filter: []
    };
  }

  search = e => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
      return null;
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

export default PostsPages;
