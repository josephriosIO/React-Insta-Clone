import React, { Component } from "react";
import "./comments.css";
import Comments from "./Comments.js";
import Likes from "./Likes";

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      comment: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      username: "josephrios",
      text: this.state.comment
    };

    const comments = this.state.comments.slice();
    comments.push(newComment);

    this.setState({ comments, comment: "" });
  };

  render() {
    return (
      <>
        <Likes likes={this.props.likes} comments={this.state.comments} />
        {this.state.comments.map(comment => (
          <Comments
            comments={this.state.comments}
            username={comment.username}
            comment={comment.text}
          />
        ))}
        <div className="post-data">
          <div className="input">
            <form onSubmit={this.submitComment}>
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={this.handleChanges}
                placeholder="Add a comment..."
                className="comment-input"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default CommentSection;
