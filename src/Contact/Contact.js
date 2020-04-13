import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <section className='contact-section snap'>
        <h3>It's dangerous to go alone! Take this.</h3>
        <ul className='contact-list'>
          <li>Resume</li>
          <li>LinkedIn</li>
          <li>Email</li>
          <li>GitHub</li>
        </ul>
      </section>
    );
  }
}

export default Contact;