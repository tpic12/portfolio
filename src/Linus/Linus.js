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
      <section className="linus-section snap">
        {slideshow && (
          <Slides
            slideshow={this.handlesSlideshow}
            image={this.state.imageArr}
          />
        )}
        <h2>Linus</h2>
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
            <img src={Logo} alt="linus logo" />
          </button>
          <p>
            Linus is a personal bartender for your home. With Linus you can add
            your favorite and current spirits in the liquor cabinet to your
            digital cabinet, and Linus will show you what cocktails you can make
            with your spirits and how! You will also be able to search for
            recipes by spirit type and make a shortlist of your favorite ones to
            try later.
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

export default Linus;
