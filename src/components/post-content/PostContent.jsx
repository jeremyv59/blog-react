import React from "react";
import { useLocation } from "react-router-dom";
import "../post-content/post-content.css";

const PostContent = () => {
  const location = useLocation();

  return (
    <div className="container container_post_content">
      <h3 className="article_title">
        Titre de l'article : {location.state.title}
      </h3>
      <p className="article_body">{location.state.body}</p>
    </div>
  );
};

export default PostContent;
