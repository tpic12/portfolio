import React, { Component } from "react";
import Slides from "../Slides/slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/handler-logo.png";
import Handler0 from "../Images/handler0.png";
import Handler1 from "../Images/handler1.png";
import Handler2 from "../Images/handler2.png";
import Handler3 from "../Images/handler3.png";
import "./handler.css";

class Handler extends Component {
  state = {
    slideshow: false,
    imageArr: [Handler0, Handler1, Handler2, Handler3],
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
      <section id="handler-section" className="handler-section snap">
        {slideshow && (
          <Slides
            slideshow={this.handlesSlideshow}
            image={this.state.imageArr}
          />
        )}
        <div className="project-content">
          <div className="logo-arrows">
            <a href="#project-landing-section">
              <FontAwesomeIcon icon="chevron-left" size="lg" />
            </a>
            <h2>The Handler</h2>
            <a href="#qtrail-section">
              <FontAwesomeIcon icon="chevron-right" size="lg" />
            </a>
          </div>
          <div className="links">
            <p>
              <a
                href="https://thehandler-3645a.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/tpic12/handler-discord-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="handler-circle">
            <button onClick={this.handlesSlideshow}>
              {!slideshow && <img src={Logo} alt="The handler discord bot" />}
            </button>

            <p>
              A bot made for the game Monster Hunter World: Iceborne to use on
              discord. The user can look up monster information, a list of
              monsters per locale, and also set up an LFG hunt to organize and
              coordinate with your fellow hunters. This was a passion project
              for me, combining both programming and video games, and wanted an
              easier way to look up information without googling before every
              hunt.
            </p>
          </div>
          <div className="tech-logos">
            <FontAwesomeIcon icon={["fab", "node-js"]} size="3x" />
            <FontAwesomeIcon icon={["fab", "discord"]} size="3x" />
          </div>
          <div className="extra-tech">
            <ul>
              <li>Express</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Handler;
