import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import PostContent from "../components/post-content/PostContent";

const Article = () => {
  return (
    <React.Fragment>
      <PostContent></PostContent>
    </React.Fragment>
  );
};

export default Article;
