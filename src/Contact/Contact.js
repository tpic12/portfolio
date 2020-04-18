import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact-section" className="contact-section snap">
        <div className="contact-div">
          <h3>
            <span className="thin">It's dangerous to go alone! </span>
            <br />
            <span className="bold">Take this.</span>
          </h3>
          <p>Resume link goes here</p>
          <ul className="contact-list">
            <li>
              <a
                href="https://www.linkedin.com/in/taylor-piccarreto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>
            </li>
            <li>
              <a href="mailto:tpic12@gmail.com">
                <FontAwesomeIcon icon="at" size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tpic12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
