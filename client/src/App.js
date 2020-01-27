import React, { Component } from "react";
import "./App.css";

import Hero from './components/Hero'
import Header from './components/Header'

import Location from "./components/Location.js";
import Menu from "./components/Menu.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <h1>Hello World</h1> */}
        <Hero/>
        <Menu />
        <Location />
      </div>
    );
  }
}

export default App;
