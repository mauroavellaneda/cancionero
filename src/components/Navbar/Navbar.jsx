import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <header>
        <div className="logo">Cancionero Popular</div>
        <ul className={toggle ? "toggle" : ""}>
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
          <li className="close" onClick={handleToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={handleToggle}>
          Menu
        </div>
      </header>
      <section></section>
    </div>
  );
};

export default Navbar;
