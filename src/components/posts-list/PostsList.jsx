import React, { useState } from "react";
import PostItem from "../post-item/PostItem";
import "../posts-list/postslist.css";

const PostsList = () => {
  const [postsList, setPostsList] = useState([
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde corporis dicta ratione quae excepturi rem ullam ea, consequuntur vero expedita rerum libero ad quas voluptates, neque praesentium perferendis maiores.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus autem sit iure ullam tenetur, temporibus omnis incidunt aspernatur provident quo nostrum ex obcaecati dolores necessitatibus",
    },
  ]);

  return (
    <div className="container">
      <h1 className="title">Tous les articles</h1>
      <div className="container_posts">
        {postsList.map((post) => {
          return <PostItem title={post.title}></PostItem>;
        })}
      </div>
    </div>
  );
};

export default PostsList;
