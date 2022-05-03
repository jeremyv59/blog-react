import React from "react";
import { Card } from "antd";
import "../post-item/post-item.css";
import { Link } from "react-router-dom";

const PostItem = ({ title, body }) => {
  return (
    <Card className="card_container">
      <h3 className="card_title">{`${title.substring(0, 50)}...`}</h3>
      <Link
        className="article_link"
        to={`posts/${title.replace(/\s+/g, "-").trim()}`}
        state={{ title: title, body: body }}
      >
        Lire l'article
      </Link>
    </Card>
  );
};

export default PostItem;
