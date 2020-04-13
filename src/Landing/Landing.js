import React, { Component } from 'react';
import ProjectLinus from '../Linus/Linus';
import ProjectSpanimal from '../Spanimal/Spanimal';
import ProjectQtrail from '../Qtrail/Qtrail'
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Landing.css';

const Landing = ({stickyRef}) => {
  const logo = () => {
    return '</>'
  }
    return (
      <>
      <section className='landing-section'>
        <div className='landing-div snap' ref={stickyRef}>
          <div className='name-tag-div'>
            <h1>Taylor<br />Piccarreto</h1>
            <p>Hi, I’m Taylor, and I like my applications like I like my pancakes: Fullstack and no bugs.</p>
          </div>
          <div className='landing-circle'>
            <span className='logo'>{logo()}</span>
          </div>
        </div>
      </section>
      <About />
      <div className='projects snap'>
        <ProjectLinus />
        <ProjectSpanimal />
        <ProjectQtrail />
      </div>
      <Contact />
      </>
    );
  }

export default Landing;