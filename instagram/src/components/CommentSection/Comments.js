import React from "react";
//import moment from "moment";

const Comments = props => {
  return (
    <>
      <div className="comment">
        <p>
          <strong>{props.username}</strong> {props.comment}{" "}
        </p>
      </div>
    </>
  );
};

export default Comments;
