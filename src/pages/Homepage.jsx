import React from "react";
import Header from "../components/header/Header";
import PostsList from "../components/posts-list/PostsList";

const Homepage = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <PostsList></PostsList>
    </React.Fragment>
  );
};

export default Homepage;
