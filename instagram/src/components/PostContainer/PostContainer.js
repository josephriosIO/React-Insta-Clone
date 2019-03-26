import React from "react";

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
        <div className="posts">
          <div className="post">
            <PostHeader
              key={post.id}
              username={post.username}
              profilePicture={post.thumbnailUrl}
            />

            <PostBody image={post.imageUrl} />
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
export default Posts;
