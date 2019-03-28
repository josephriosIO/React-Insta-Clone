import React from "react";
import PropTypes from "prop-types";
//styling
import "./posts.css";

// components
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import CommentSection from "../CommentSection/CommentSection.js";

const Posts = props => {
  return (
    <>
      {/* mapping through the post seperating them by components*/}
      {props.postsData.map(post => (
        <div key={post.id} className="posts">
          <div className="post">
            {/*
              // passing for every post it's id, username, and thumbnailUrl to postheader
            */}
            <PostHeader
              key={post.id}
              username={post.username}
              profilePicture={post.thumbnailUrl}
            />
            {/* passing username, and imageUrl to PostBody*/}
            <PostBody username={post.username} image={post.imageUrl} />
            {/* passing likes, id and comments array to CommentSection*/}
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

// checking proptypes to make sure i'm only getting the create types
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
