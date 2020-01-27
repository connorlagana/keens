import React, { Component } from "react";
import Slider from "./Slider";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Slider />
        <div className="resturantName">
          <h1>KEEN'S STEAK HOUSE</h1>
          <button className="Reservations">Reservations</button>
        </div>
       <a href="#about"><div className="polygon"></div></a>
      </div>
    );
  }
}

export default Hero;
