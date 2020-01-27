import React, { Component } from "react";
import "./App.css";
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Hello World</h1> */}
        <Hero/>
      </div>
    );
  }
}

export default App;
