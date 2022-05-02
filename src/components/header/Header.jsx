import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import { HomeOutlined, BookOutlined, MessageOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header>
      <ul className="container_items">
        <li>
          <Link to="/">
            <HomeOutlined className="icon"></HomeOutlined>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/ecrire">
            <BookOutlined className="icon"></BookOutlined>Ecrire
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <MessageOutlined className="icon"></MessageOutlined>Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
