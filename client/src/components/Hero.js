import React, { Component } from "react";
import Slider from "./Slider";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Slider />
        <div className="resturantName">
          <div className="nameTitle"><h1>KEEN'S STEAK HOUSE</h1></div>
          <button className="Reservations">Reservations</button>
        </div>
        <a href="#about">
          <div className="polygon">
            <h3 id="scroll">scroll</h3>
          </div>
        </a>
      </div>
    );
  }
}

export default Hero;
