import React, { Component } from "react";
import googleMaps from "../images/googleMaps.png";

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <div>
          <div id="leftLocationDiv">
            <img src={googleMaps} />
          </div>
        </div>
        <div id="rightLocationDiv">
          <div id="locationTitleDiv">
            <div id="leftLineLocation"></div>
            <p id="locationTitle">LOCATION</p>
            <div id="leftLineLocation"></div>
          </div>
          <div className="addressLocation">
            <p>72 West 36th Street</p>
            <p>New York, NY 10008</p>
          </div>
          <div className="addressLocation">
            <p>tel:212-947-3638</p>
          </div>
          <div id="hours">
            <h1>HOURS</h1>
            <div id="belowHours">
              <div>
                <p>Monday to Friday</p>
                <p>11:45am-10:45pm</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>5:00pm-10:00pm</p>
              </div>
              <div>
                <p>Sunday</p>
                <p>5:00pm-9:30pm</p>
              </div>
            </div>
          </div>
          <div className="specialsMenu">
            <p>Desserts</p>
            <p>Specialized Drinks</p>
            <p>Wine</p>
          </div>
          <div>
            <button id="menuButton">Private Events</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
