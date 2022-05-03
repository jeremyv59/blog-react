import React, { useContext, useEffect, useState } from "react";
import PostItem from "../post-item/PostItem";
import "../posts-list/postslist.css";

import LoadingSpinner from "../post-item/LoadingSpinner";
import { BlogContext } from "../../context/BlogContext";

const PostsList = () => {
  const context = useContext(BlogContext);

  console.log("ctx", context);

  return (
    <div className="container">
      <h1 className="title">Tous les articles</h1>
      <div className="container_posts">
        {context.data ? (
          context.data.map((post, index) => {
            return (
              <PostItem
                key={post.id ? post.id : index}
                title={post.title}
                body={post.body}
              ></PostItem>
            );
          })
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </div>
    </div>
  );
};

export default PostsList;
