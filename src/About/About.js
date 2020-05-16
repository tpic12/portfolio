import React, { Component } from "react";
import Pic from "../Images/headshot.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section id="about-section" className="about-section snap">
        <div className="header-space"></div>
        <div className="about-me">
          <div className="about-circle">
            <img src={Pic} className="pic" alt="taylor" />
          </div>
          <p>
            {" "}
            &emsp; A NYC transplant from upstate New York, I came here for a job
            on Wall Street, enjoyed life behind a bar more, and then decided
            said bar-life was no longer for me. Now, a recent graduate from
            Thinkful’s Engineering Immersion, I am looking to start a new career
            as a developer and professional bug taker-outer (digital-kind only).
            <br />
            <br />
            &emsp;I have always enjoyed solving problems, from how to add
            different parts to my computer to rock climbing. Just like in rock
            climbing, something can be developed in more than one way, but it’s
            all about finding the most efficient way for your product.
            Frameworks or languages that work for one team may not be best for
            another, even though they both get the job done. That's why teamwork
            is also one of my major cornerstones, having those diverse points of
            view to work with daily can open up your eyes to alternative methods
            that beofre were completely lost to you.
            <br />
            <br />
            When a good challenge comes along, I pride my self on my
            adaptability, being in numerous work industries (hospitality, to
            Wall Street, to Development) I have learned to take skills acquired
            and apply them in non-conventional ways, to view a problem from my
            point of view, the Taylor v4.0 view.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
