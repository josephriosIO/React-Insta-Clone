import React from "react";
import moment from "moment";

const Comments = props => {
  return (
    <>
      <div className="comment">
        <p>
          <strong>{props.username}</strong> {props.comment}{" "}
          <i
            onClick={props.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: "pointer", color: "red" }}
          />
          <p className="time">
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
