import React from "react";
import ProjectLinus from "../Linus/Linus";
import ProjectSpanimal from "../Spanimal/Spanimal";
import ProjectQtrail from "../Qtrail/Qtrail";
import ProjectHandler from "../Handler/handler";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ProjectLanding from "../ProjectLanding/ProjectLanding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Landing.css";

const Landing = ({ stickyRef }) => {
  const logo = () => {
    return "{tP}";
  };
  return (
    <>
      <section className="landing-section snap">
        <div className="landing-div" ref={stickyRef}>
          <div className="landing-content">
            <div className="name-tag-div">
              <h1>
                <span className="thin">Taylor</span>
                <br />
                <span className="bold">Piccarreto</span>
              </h1>
              <p>
                I like my applications like I like my pancakes: Fullstack and no
                bugs.
              </p>
            </div>
            <div className="landing-circle">
              <span className="logo">{logo()}</span>
            </div>
          </div>
          <a href="#about-section">
            <FontAwesomeIcon icon="chevron-down" size="lg" />
          </a>
        </div>
      </section>
      <About />
      <div id="projects-section" className="projects snap">
        <ProjectLanding />
        <ProjectHandler />
        <ProjectQtrail />
        <ProjectLinus />
        <ProjectSpanimal />
      </div>
      <Contact />
    </>
  );
};

export default Landing;
