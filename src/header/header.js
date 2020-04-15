import React from "react";
import "./header.css";

const Header = ({ sticky }) => {
  const name = () => {
    return "{tP}";
  };
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar navbar-hidden"}>
      <div className="navbar--logo-holder">
        <h1>{name()}</h1>
      </div>
      <div className="navbar--link">
        <div className="navbar--link-item">About</div>
        <div className="navbar--link-item">Projects</div>
        <div className="navbar--link-item">Contact</div>
      </div>
    </nav>
  );
};

export default Header;
