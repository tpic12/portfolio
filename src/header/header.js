import React from 'react';
import './header.css';

const Header = ({sticky}) => {
  const name = () => {
    return '{tP}'
  }
    return (
      <nav className={sticky ? "navbar navbar-sticky" : "hidden"}>
         <div className="navbar--logo-holder">
          <h1>{name()}</h1>
        </div>
        <ul className="navbar--link">
          <li className="navbar--link-item">About</li>
          <li className="navbar--link-item">Projects</li>
          <li className="navbar--link-item">Contact</li>
        </ul>
      </nav>
    );
}


export default Header;