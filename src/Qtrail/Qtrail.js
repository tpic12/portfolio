import React, { Component } from "react";
import Slides from "../Slides/slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/qtrail-logo.png";
import Qtrail0 from "../Images/qtrail0.png";
import Qtrail1 from "../Images/qtrail1.png";
import Qtrail2 from "../Images/qtrail2.png";
import Qtrail3 from "../Images/qtrail3.png";
import "./Qtrail.css";

class Qtrail extends Component {
  state = {
    slideshow: false,
    imageArr: [Qtrail0, Qtrail1, Qtrail2, Qtrail3],
  };

  handlesSlideshow = () => {
    const { slideshow } = this.state;
    this.setState({ slideshow: !this.state.slideshow });
    document.documentElement.style.overflow = !slideshow ? "hidden" : "scroll";
    document.body.scroll = !slideshow;
  };

  render() {
    const { slideshow } = this.state;
    return (
      <section id="qtrail-section" className="qtrail-section snap">
        {slideshow && (
          <Slides
            slideshow={this.handlesSlideshow}
            image={this.state.imageArr}
          />
        )}
        <h2>QuaranTrail</h2>
        <div className="links">
          <p>
            <a
              href="https://quarantrail.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/tpic12/Quarantrail-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="qtrail-circle">
          <button onClick={this.handlesSlideshow}>
            {!slideshow && <img src={Logo} alt="quaran trail - stay home" />}
          </button>
          <p>
            In this playful and lighthearted game, the world was struck with an
            awful pandemic and the player has to stay indoors. The goal is to
            practice social distancing and self quarantine while keeping one's
            boredom and infection level bar low for as many days as possible.
          </p>
        </div>
        <div className="tech-logos">
          <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "css3"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
          <FontAwesomeIcon icon={["fas", "database"]} size="2x" />
        </div>
      </section>
    );
  }
}

export default Qtrail;
/**
 *       <section className="qtrail-section snap">
        <div className="qtrail-text">
          <h2>QuaranTrail</h2>
          <p>
            In this playful and lighthearted game, the world was struck with an
            awful pandemic and the player has to stay indoors. The goal is to
            practice social distancing and self quarantine while keeping one's
            boredom and infection level bar low for as many days as possible.
          </p>
        </div>
        <div className="links">
          <p>
            <a
              href="https://quarantrail.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/tpic12/Quarantrail-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="tech-stack">
          <h3>Technology Used:</h3>
          <ul className="tech-stack-list">
            <li>React</li>
            <li>React Game Engine</li>
            <li>Express</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="screenshots">
          <p>screenshots here</p>
          <p>screenshots here</p>
          <p>screenshots here</p>
        </div>
      </section>
 */
