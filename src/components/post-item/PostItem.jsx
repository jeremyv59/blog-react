import React from "react";
import { Card } from "antd";
import "../post-item/post-item.css";

const PostItem = ({ title }) => {
  return (
    <Card className="card_container">
      <p className="card_title">{`${title.substring(0, 150)}...`}</p>
      <a className="article_link">Lire l'article</a>
    </Card>
  );
};

export default PostItem;
