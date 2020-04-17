import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slides.css";

class Qtrail extends Component {
  state = {
    imageNum: 0,
  };

  handleNextImage = () => {
    const { imageNum } = this.state;
    if (!this.props.image[imageNum + 1]) {
      this.setState({
        imageNum: 0,
      });
    } else {
      this.setState({
        imageNum: this.state.imageNum + 1,
      });
    }
  };

  handlePrevImage = () => {
    const { imageNum } = this.state;
    if (imageNum === 0) {
      this.setState({
        imageNum: this.props.image.length - 1,
      });
    } else {
      this.setState({
        imageNum: this.state.imageNum - 1,
      });
    }
  };

  render() {
    const { imageNum } = this.state;
    return (
      <section className="slides-section">
        <div className="slides-main">
          <button onClick={this.props.slideshow}>
            <FontAwesomeIcon icon="times-circle" size="lg" />
          </button>
          <img
            src={this.props.image[imageNum]}
            alt="application screenshot"
            // height={"70%"}
            // width={"98%"}
          />
          <div className="prev-next">
            <button onClick={this.handlePrevImage}>
              <FontAwesomeIcon icon="chevron-left" size="lg" />
            </button>
            <button onClick={this.handleNextImage}>
              <FontAwesomeIcon icon="chevron-right" size="lg" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Qtrail;
