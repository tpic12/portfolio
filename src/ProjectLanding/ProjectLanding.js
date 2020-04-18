import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectLanding.css";

class ProjectLanding extends Component {
  render() {
    return (
      <section className="project-landing-section snap">
        <div className="project-landing-title">
          <div className="project-landing-circle">
            <h2>Projects</h2>
          </div>
          <FontAwesomeIcon icon="chevron-right" size="lg" />
        </div>
      </section>
    );
  }
}

export default ProjectLanding;
