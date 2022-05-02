import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

const Header = () => {
  return (
    <header>
      <ul className="container_items">
        <li className="item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="item">
          <Link to="/ecrire">Ecrire</Link>
        </li>
        <li className="item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
