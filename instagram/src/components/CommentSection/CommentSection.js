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

  componentDidMount() {
    const id = this.props.index;
    console.log(id);
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.index))
      });
    } else {
      this.setComments();
    }
  }

  setComments = () => {
    localStorage.setItem(this.props.index, JSON.stringify(this.state.comments));
  };

  handleChanges = (e, id) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      username: localStorage.getItem("username"),
      text: this.state.comment
    };
    const id = this.props.index;
    const comments = this.state.comments.slice();
    comments.push(newComment);

    this.setState({ comments, comment: "" });

    localStorage.setItem(id, JSON.stringify(comments));
  };

  render() {
    return (
      <>
        <Likes likes={this.props.likes} comments={this.state.comments} />
        {this.state.comments.map(comment => (
          <Comments
            key={comment.id}
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
