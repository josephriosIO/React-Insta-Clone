import React from "react";

//styling
import "./comments.css";

const Comments = props => {
  return (
    <>
      {props.comments.map(comment => (
        <div className="comment">
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        </div>
      ))}
      <div className="input">
        <input placeholder="      Add a comment..." className="comment-input" />
      </div>
    </>
  );
};

export default Comments;
