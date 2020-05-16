import React, { Component } from "react";
import Slides from "../Slides/slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/spanimal-logo.png";
import Spanimals0 from "../Images/spanimals0.png";
import Spanimals1 from "../Images/spanimals1.png";
import Spanimals2 from "../Images/spanimals2.png";
import "./Spanimal.css";

class Spanimal extends Component {
  state = {
    slideshow: false,
    imageArr: [Spanimals0, Spanimals1, Spanimals2],
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
      <section id="spanimals-section" className="spanimal-section snap">
        {slideshow && (
          <Slides
            slideshow={this.handlesSlideshow}
            image={this.state.imageArr}
          />
        )}
        <div className="project-content">
          <div className="spanimals-logo-arrows">
            <a href="#linus-section">
              <FontAwesomeIcon icon="chevron-left" size="lg" />
            </a>
            <h2>Spanimals</h2>
            <div></div>
          </div>
          <div className="links">
            <p>
              {" "}
              <a
                href="https://spanimal.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/tpic12/spanimal-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="spanimal-circle">
            <button onClick={this.handlesSlideshow}>
              {!slideshow && <img src={Logo} alt="spanimals logo" />}
            </button>

            <p>
              Spanimals is a language learning application that utilizes the
              spaced repetition technique. Specifically designed to learn the
              Spanish translations for animals, Spanimals was made for an intro
              learner to the language. This was inspired by other language
              learning apps like Duolingo and Memrise, but with more of a niche
              role in the arena.
            </p>
          </div>
          <div className="tech-logos">
            <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "css3"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "node-js"]} size="2x" />
            <FontAwesomeIcon icon={["fas", "database"]} size="2x" />
          </div>
          <div className="extra-tech">
            <ul>
              <li>Express</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Cypress</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Spanimal;
/**
 *         <div className="spanimal-text">
          <h2>Spanimal</h2>
          <p>
            A Learning Language platform that teaches the Spanish translations
            for animals using the spaced-repetition technique. Users can
            sign-up, start learning and keep track of their scores per word, and
            across the language.
          </p>
        </div>
        <div className="links">
          <p>
            {" "}
            <a
              href="https://spanimal.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/tpic12/spanimal-client"
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
            <li>Express</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>PostgreSQL</li>
            <li>JWT</li>
            <li>Cypress</li>
          </ul>
        </div>
        <div className="screenshots">
          <p>screenshots here</p>
          <p>screenshots here</p>
          <p>screenshots here</p>
        </div>
 */
