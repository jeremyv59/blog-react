import React from "react";
import "../header/header.css";

const Header = () => {
  return (
    <header>
      <div className="container_items">
        <a href="/">ACCUEIL</a>
        <a href="/ecrire">ECRIRE</a>
        <a href="/contact">CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
