import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className='about-section snap'>
        <div className='about-me'>
            <p> &emsp; I am an NYC transplant from upstate New York, came here for a job on 
                Wall Street, enjoyed life behind a bar more, currently trying to get 
                out of the said bar. Now, a recent graduate from Thinkful’s Engineering Immersion, 
                I am looking to start a new career as a developer and professional 
                bug taker-outer (digital-kind only).

                <br/><br/>&emsp;I have always enjoyed solving problems, from how to add different 
                parts to my computer to rock climbing. Looking at something and figuring out 
                how to accomplish what looks impossible drives me to try, and then when it 
                gets done, to do it better. When a good challenge comes along I pride my self 
                on my adaptability, being in numerous work industries 
                (hospitality, to Wall Street, to Development) I have learned to take skills 
                learned and apply them in non-conventional ways, to view a problem from my 
                point of view, the Taylor v4.0 view. 
            </p>
        
        <div className='about-circle'>
            <span className='pic'>picture of me here</span>
        </div>
        </div>
      </section>
    );
  }
}

export default About;