import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="logo">Cancionero Popular</div>
        <ul>
          <li>
            <Link to="/">Principal</Link>
          </li>
          <li>
            <Link to="/artists">Artistas</Link>
          </li>
          <li>
            <Link to="/lyrics">Letras</Link>
          </li>
          <li>
            <Link to="/chords">Acordes</Link>
          </li>
          <li className="close">X</li>
        </ul>
        <div className="menu">Menu</div>
      </header>
      <section></section>
    </div>
  );
};

export default Navbar;
