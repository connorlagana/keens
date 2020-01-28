import React, { Component } from "react";
import googleMaps from "../images/googleMaps.png";

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <div>
          <div id="leftLocationDiv">
          <iframe id="googleMaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1511.2591469244708!2d-73.987004!3d40.7506239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa89dbb19d96569cc!2sKeens%20Steakhouse!5e0!3m2!1sen!2sus!4v1580232117513!5m2!1sen!2sus" frameborder="0" allowfullscreen=""></iframe>
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
