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
      //setting data to the dummydata we have
      data: dummyData,
      // setting filter to an empty array
      filter: []
    };
  }

  search = e => {
    // filtering through the state of data and if the target value includes part
    // of the username return that post
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
      // else to nothing
      return null;
    });
    // setting the state of filtered post to the this.state.filter
    this.setState({ filter: posts });
  };
  render() {
    return (
      <div className="App">
        {/* passing down the search function to the component SearchBar*/}
        <SearchBar search={this.search} />
        {/* if the this.state.filter length is greater than 0 show filtered posts*/}
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
