import React, { Component } from "react";

//styling
import "./posts.css";

class Posts extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.posts.map(post => (
          <div className="posts">
            <div className="post">
              <div className="post-header">
                <img src={post.thumbnailUrl} />
                <h1>{post.username}</h1>
              </div>
              <img src={post.imageUrl} />
              <div className="post-data">
                <i class="far fa-heart" />
                <i class="far fa-comment" />
                <p>{post.likes} likes </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Posts;
