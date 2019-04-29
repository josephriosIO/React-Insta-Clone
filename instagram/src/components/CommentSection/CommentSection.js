import React, { Component } from "react";
import "./comments.css";
import Comments from "./Comments.js";
import Likes from "./Likes";

class CommentSection extends Component {
  // class constructor taking in props
  constructor(props) {
    super(props);

    this.state = {
      //setting the state comments to the comment props brough down from post container
      comments: this.props.comments,
      //setting a empty comment into the state
      comment: ""
    };
  }

  componentDidMount() {
    //storing the id brought down from props to a variable
    const id = this.props.index;
    // if localStorage has an id value
    if (localStorage.getItem(id)) {
      // set the comments into state while setting them in localStorage
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.index))
      });
      //if not run setComments function
    } else {
      this.setComments();
    }
  }

  setComments = () => {
    // setting the whole post comments into localStorage while changing
    // the object into a json string value
    localStorage.setItem(this.props.index, JSON.stringify(this.state.comments));
  };

  handleChanges = (e, id) => {
    // targeting the comment in state the the targeted value
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    // preventing a refresh of the page
    e.preventDefault();
    // creating a new comment
    const newComment = {
      id: Date.now(),
      //using the username from login as the username for the comment
      username: localStorage.getItem("username"),
      //setting the text of the comment as the value of this.state.comment
      text: this.state.comment
    };
    // setting the id as a variable
    const id = this.props.index;
    // slicing the old comments to store
    const comments = this.state.comments.slice();
    // connecting the old comments to the new comment together into a new array
    comments.push(newComment);

    // setting the new comments array to the state while also resetting
    // the comment back to an empty string
    this.setState({ comments, comment: "" });

    // setting that new comment to localStorage with the assoicating id
    localStorage.setItem(id, JSON.stringify(comments));
  };

  onDeleteClick = id => {
    // taking of comments of this state to make typing shorter
    const { comments } = this.state;
    // storing the index again
    const idx = this.props.index;
    //filtering out the comments that DONT have the same id
    const newComments = comments.filter(comment => {
      if (comment.id !== id) {
        //removing that one clicked from localStorage
        localStorage.removeItem("id");
      }
      return comment.id !== id;
    });

    this.setState({
      // resetting the state with the updated comments without the one filtered out
      comments: newComments
    });
    // setting the new comments to localStorage
    localStorage.setItem(idx, JSON.stringify(newComments));
  };

  render() {
    return (
      <>
        {/* passing down the likes prop that i brought down for postcontainer*/}
        <Likes likes={this.props.likes} comments={this.state.comments} />
        {/* mapping the NEW comments and passing down its props to comments*/}

        {this.state.comments.map(comment => (
          <Comments
            onDeleteClick={this.onDeleteClick.bind(this, comment.id)}
            key={comment.id}
            comments={this.state.comments}
            username={comment.username}
            comment={comment.text}
          />
        ))}
        <div className="post-data">
          <div className="input">
            {/* a form that accesses most of the functions on this level*/}
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
