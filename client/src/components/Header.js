import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
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
    );
  }
}

export default Header;
