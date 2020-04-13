import React, { Component } from 'react';
import './Qtrail.css';

class Qtrail extends Component {
  render() {
    return (
      <section className='qtrail-section snap'>
        <div className='qtrail-text'>
          <h2>QuaranTrail</h2>
          <p>In this playful and lighthearted game, the world was struck with an awful pandemic and the player has to stay indoors. The goal is to practice social distancing and self quarantine while keeping one's boredom level bar low for as many days as possible. As such, the two guages to keep an eye on are the chance of infection and boredom. Every choice and action can increase or decrease these guages so tread carefully. The player must also need to keep track of, and maintain, their supply of food and toilet paper, but you may not want to get too much...
          </p>
        </div>
        <div className='links'>
          <p>Live Link | GitHub</p>
        </div>
        <div className='tech-stack'>
          <h3>Technology Used:</h3>
          <ul className='tech-stack-list'>
            <li>React</li>
            <li>React Game Engine</li>
            <li>Express</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>PostgreSQL</li>
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

export default Qtrail;