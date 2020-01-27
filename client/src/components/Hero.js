import React, { Component } from "react";
import Slider from "./Slider";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Slider />
        <div className="resturantName">
          <h1>KEEN'S STEAK HOUSE</h1>
          <button className="Reservations">
            <h4 id="reserveName">Reservations</h4>
          </button>
        </div>
        <div className="polygon" placeholder="scroll"></div>
      </div>
    );
  }
}

export default Hero;
