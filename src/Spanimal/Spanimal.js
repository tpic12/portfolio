import React, { Component } from 'react';
import './Spanimal.css';

class Spanimal extends Component {
  render() {
    return (
      <section className='spanimal-section snap'>
        <div className='spanimal-text'>
          <h2>Spanimal</h2>
          <p>A Learning Language platform that teaches the Spanish translations for animals using the spaced-repetition technique. Users can sign-up, start learning and keep track of their scores per word, and across the language. 
          </p>
        </div>
        <div className='links'>
          <p>Live Link | GitHub</p>
        </div>
        <div className='tech-stack'>
          <h3>Technology Used:</h3>
          <ul className='tech-stack-list'>
            <li>React</li>
            <li>Express</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>PostgreSQL</li>
            <li>JWT</li>
            <li>Cypress</li>
          </ul>
        </div>
        <div className='screenshots'>
          <p>screenshots here</p>
          <p>screenshots here</p>
          <p>screenshots here</p>
        </div>
      </section>
    );
  }
}

export default Spanimal;