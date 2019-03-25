import React, { Component } from "react";

//styling
import "./posts.css";

// comments
import Comments from "../CommentSection/CommentSection.js";

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
                <i className="far fa-heart" />
                <i className="far fa-comment" />
                <p>{post.likes} likes </p>
                <Comments comments={post.comments} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Posts;
