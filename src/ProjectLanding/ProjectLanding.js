import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectLanding.css";

class ProjectLanding extends Component {
  handleNext = () => {};
  render() {
    return (
      <section
        id="project-landing-section"
        className="project-landing-section snap"
      >
        <div className="project-content">
          <div className="project-landing-title">
            <div></div>
            <div className="project-landing-circle">
              <h2>Projects</h2>
            </div>
            <a href="#qtrail-section">
              <FontAwesomeIcon icon="chevron-right" size="lg" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectLanding;
