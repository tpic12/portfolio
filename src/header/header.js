import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {
    checked: false,
  };
  name = () => {
    return "{tP}";
  };

  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { sticky } = this.props;
    const { checked } = this.state;
    return (
      <nav
        role="navigation"
        className={sticky ? "navbar navbar-sticky" : "navbar navbar-hidden"}
      >
        <div id="menuToggle">
          <input type="checkbox" onClick={this.handleChecked} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#about-section">
              <li>About</li>
            </a>
            <a href="#projects-section">
              <li>Projects</li>
            </a>
            <a href="#contact-section">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div
          className={
            checked ? "navbar--logo-holder blue" : "navbar--logo-holder white"
          }
        >
          <h1>{this.name()}</h1>
        </div>
      </nav>
    );
  }
}

export default Header;
