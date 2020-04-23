import React, { Component } from "react";
import Slides from "../Slides/slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/linus-logo.png";
import Linus0 from "../Images/linus0.png";
import Linus1 from "../Images/linus1.png";
import Linus2 from "../Images/linus2.png";
import Linus3 from "../Images/linus3.png";
import "./Linus.css";

class Linus extends Component {
  state = {
    slideshow: false,
    imageArr: [Linus0, Linus1, Linus2, Linus3],
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
      <section id="linus-section" className="linus-section snap">
        {slideshow && (
          <Slides
            slideshow={this.handlesSlideshow}
            image={this.state.imageArr}
          />
        )}
        <div className="project-content">
          <div className="logo-arrows">
            <a href="#qtrail-section">
              <FontAwesomeIcon icon="chevron-left" size="lg" />
            </a>
            <h2>Linus</h2>
            <a href="#spanimals-section">
              <FontAwesomeIcon icon="chevron-right" size="lg" />
            </a>
          </div>
          <div className="links">
            <p>
              <a
                href="https://linus-ten.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/tpic12/Linus-Client"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="linus-circle">
            <button onClick={this.handlesSlideshow}>
              {!slideshow && <img src={Logo} alt="linus-logo" />}
            </button>

            <p>
              This is Linus, and Linus can tell you what to make from spirits in
              your liquor cabinet! A personal bartender of sorts, after adding
              your spirits into Linus, he will show you some cocktails to that
              you can make at home. This app is for the person that likes to
              have a nice cocktail after work, or even an aspiring mad men. As a
              former bartender I love making drinks at home and wanted to share
              how easy and fun it is.
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
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Linus;
