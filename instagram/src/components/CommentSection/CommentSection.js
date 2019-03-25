import React, { Component } from "react";
import PropTypes from "prop-types";

//styling
import "./comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      comments: this.props.comments
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.addComments();
    }
  }

  addComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const newComment = {
      username: "josephrios",
      text: this.state.text
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);

    this.setState({ comments, text: "" });
  };
  render() {
    return (
      <>
        {this.state.comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          </div>
        ))}
        <div className="input">
          <form onSubmit={this.submitComment}>
            <input
              type="text"
              name="text"
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
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Comments;
