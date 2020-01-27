import React, { Component } from "react";
import googleMaps from "../images/googleMaps.png";

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <div>
          <div id="leftLocationDiv">
            <a href="https://www.google.com/maps/place/Keens+Steakhouse/@40.7506239,-73.987004,18.24z/data=!4m5!3m4!1s0x0:0xa89dbb19d96569cc!8m2!3d40.7507759!4d-73.9864754">
              <img src={googleMaps} alt="loading"/>
            </a>
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
              <div className="belowHoursOperations">
                <p>Monday to Friday</p>
                <p>11:45am-10:45pm</p>
              </div>
              <div className="belowHoursOperations">
                <p>Saturday</p>
                <p>5:00pm-10:00pm</p>
              </div>
              <div className="belowHoursOperations">
                <p>Sunday</p>
                <p>5:00pm-9:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
