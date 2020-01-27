import React, { Component } from "react";
import "./App.css";
import Location from "./components/Location.js";
import Menu from "./components/Menu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        {/* <Location /> */}
      </div>
    );
  }
}

export default App;
