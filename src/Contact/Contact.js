import React, { Component } from "react";
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
          <ul className="contact-list">
            <li>Resume</li>
            <li>LinkedIn</li>
            <li>Email</li>
            <li>GitHub</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
