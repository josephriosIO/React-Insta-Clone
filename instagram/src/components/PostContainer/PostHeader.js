import React from "react";

const PostHeader = props => {
  return (
    <div className="post-header">
      <img src={props.profilePicture} />
      <h1>{props.username}</h1>
    </div>
  );
};

export default PostHeader;
