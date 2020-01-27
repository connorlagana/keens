import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="header">
          <div className="logo">
            <img src="https://imgur.com/CbhUXUB.png" alt="logo" className="logoImage"/>
          </div>
          <div className="nav">
            <Link to="#"> Reservations</Link>
            <Link to="#">About</Link>
            <Link to="#">Menus</Link>
            <Link to="#">Private Events</Link>
            <Link to="#">Galley</Link>
            <Link to="#">Contacts</Link>
          </div>
        </div>
        <div className="resturantName">
          <h1>KEEN'S STEAK HOUSE</h1>
          <button className="Reservations"><h4 id='reserveName'>Reservations</h4></button>
        </div>
        <div className="bodyRegion"></div>
      </div>
    );
  }
}

export default Hero;
