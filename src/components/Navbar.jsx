import React, { useState } from "react";
import { links, social } from "../data/links";
import { FaBars, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav className="nav-center">
        <div className="nav-header">
          <h1>Cancionero Popular</h1>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <>
            <div className="links-container show-container">
              <ul className="links">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
