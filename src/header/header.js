import React from "react";
import "./header.css";

const Header = ({ sticky }) => {
  const name = () => {
    return "{tP}";
  };
  return (
    <nav
      role="navigation"
      className={sticky ? "navbar navbar-sticky" : "navbar navbar-hidden"}
    >
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="navbar--logo-holder">
        <h1>{name()}</h1>
      </div>
    </nav>
  );
};

export default Header;
