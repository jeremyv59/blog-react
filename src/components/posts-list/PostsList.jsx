import React, { useEffect, useState } from "react";
import PostItem from "../post-item/PostItem";
import "../posts-list/postslist.css";
import axios from "axios";
import LoadingSpinner from "../post-item/LoadingSpinner";

const PostsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=25`
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Tous les articles</h1>
      <div className="container_posts">
        {!loading && data ? (
          data.map((post) => {
            return <PostItem key={post.id} title={post.title}></PostItem>;
          })
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </div>
    </div>
  );
};

export default PostsList;
