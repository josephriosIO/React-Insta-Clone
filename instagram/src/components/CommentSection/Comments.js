import React from "react";
import moment from "moment";

const Comments = props => {
  return (
    <>
      <div className="comment">
        <p>
          <strong>{props.username}</strong> {props.comment}{" "}
            // inline styles and a onClick
          <i
            onClick={props.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: "pointer", color: "red" }}
          />
          <p className="time">
            // using momentjs as a way to grab a readable time for the comments
            {moment()
              .startOf("hour")
              .fromNow()}
          </p>
        </p>
      </div>
    </>
  );
};

export default Comments;
