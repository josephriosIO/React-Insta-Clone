import React, { Component } from "react";
import PropTypes from "prop-types";

//styling
import "./comments.css";

class Comments extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();

    this.props.addComment(this.state.comment);

    this.setState({ comment: "" });
  };
  render() {
    return (
      <>
        {this.props.comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          </div>
        ))}
        <div className="input">
          <form onChange={this.submitComment}>
            <input
              type="text"
              name="comment"
              value={this.state.text}
              onChange={this.handleChanges}
              placeholder="      Add a comment..."
              className="comment-input"
            />
          </form>
        </div>
      </>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Comments;
