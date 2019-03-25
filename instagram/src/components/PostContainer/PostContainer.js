import React, { Component } from "react";

class Posts extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.posts.map(post => (
          <div>
            <h1>{post.username}</h1>
          </div>
        ))}
      </>
    );
  }
}

export default Posts;
