import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import { HomeOutlined, BookOutlined, MessageOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header>
      <ul className="container_items">
        <li>
          <HomeOutlined className="icon"></HomeOutlined>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <BookOutlined className="icon"></BookOutlined>
          <Link to="/ecrire">Ecrire</Link>
        </li>
        <li>
          <MessageOutlined className="icon"></MessageOutlined>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
