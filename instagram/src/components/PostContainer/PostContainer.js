import React from "react";
import PropTypes from "prop-types";
//styling
import "./posts.css";

// comments
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import CommentSection from "../CommentSection/CommentSection.js";

const Posts = props => {
  return (
    <>
      {props.postsData.map(post => (
        <div key={post.id} className="posts">
          <div className="post">
            <PostHeader
              key={post.id}
              username={post.username}
              profilePicture={post.thumbnailUrl}
            />

            <PostBody username={post.username} image={post.imageUrl} />
            <CommentSection
              likes={post.likes}
              index={post.id}
              comments={post.comments}
            />
          </div>
        </div>
      ))}
    </>
  );
};

Posts.propTypes = {
  postsData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      profilePicture: PropTypes.string,
      comments: PropTypes.array
    })
  )
};
export default Posts;
