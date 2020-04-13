import React, { Component } from 'react';
import './Linus.css';

class Linus extends Component {
  render() {
    return (
      <section className='linus-section snap'>
        <div className='linus-text'>
          <h2>Linus</h2>
          <p>Linus is a personal bartender for your home. With Linus you can add your favorite and current spirits in the liquor cabinet to your digital cabinet, and Linus will show you what cocktails you can make with your spirits and how! You will also be able to search for recipes by spirit type and make a shortlist of your favorite ones to try later. 
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

export default Linus;