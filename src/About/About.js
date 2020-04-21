import React, { Component } from "react";
import Pic from "../Images/headshot.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section id="about-section" className="about-section">
        <div className="about-me snap">
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
            different parts to my computer to rock climbing. Looking at
            something and figuring out how to accomplish what looks impossible
            drives me to try, and then when it gets done, to do it better. When
            a good challenge comes along I pride my self on my adaptability,
            being in numerous work industries (hospitality, to Wall Street, to
            Development) I have learned to take skills learned and apply them in
            non-conventional ways, to view a problem from my point of view, the
            Taylor v4.0 view.
          </p>
          <div className="about-circle">
            <img src={Pic} className="pic" alt="taylor" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
