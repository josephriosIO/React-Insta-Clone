import React from "react";

const PostHeader = props => {
  return (
    <div className="post-header">
      // displaying its posts props that were brought down
      <img src={props.profilePicture} alt="oops" />
      <h1>{props.username}</h1>
    </div>
  );
};

export default PostHeader;
