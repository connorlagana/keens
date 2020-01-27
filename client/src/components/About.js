import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="aboutSection">
        <div className="aboutTop">
          <div id="leftLineAbout" />
          <h1>About</h1>
          <div id="leftLineAbout" />
        </div>
        <div id="aboutMission">
          <p>
            In 1885 Keens Chophouse opened independently under the ownership of
            Albert Keen, by then a noted figure in the Herald Square Theatre
            District. Keens soon became the lively and accepted rendezous of the
            famous.{" "}
          </p>
        </div>
        <div id="readMoreDiv">
          <a
            className="readMore"
            href="http://www.keens.com/AboutKeens/History/"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default About;
