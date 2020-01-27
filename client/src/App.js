import React, { Component } from "react";
import "./App.css";

import Hero from './components/Hero'

import Location from "./components/Location.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Review from "./components/Review.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Review />
        <Menu />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
