import React, { Component } from "react";
import imageMenu from "../images/imageMenu.jpeg";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div id="leftMenuDiv">
          <img src={imageMenu} />
        </div>
        <div id="rightMenuDiv">
          <div id="menuDivMenu">
            <div id="leftLineMenu"></div>
            <p id="menuTitle">MENU</p>
            <div id="leftLineMenu"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
