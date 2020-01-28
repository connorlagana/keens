import React, { Component } from "react";
import imageMenu from "../images/imageMenu.jpg";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div id="leftMenuDiv">
          <img src={imageMenu} alt="loading" id="paintingPic"/>
        </div>
        <div id="rightMenuDiv">
          <div id="menuTitleDiv">
            <div id="leftLineMenu"></div>
            <p id="menuTitle">MENU</p>
            <div id="leftLineMenu"></div>
          </div>
          <div className="specialsMenu">
            <p>Special's</p>
            <p>Lunch</p>
            <p>Dinner</p>
            <p>Pub Menu</p>
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

export default Menu;
