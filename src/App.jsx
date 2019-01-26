import React, { Component } from "react";
import "./App.css";
import StatBox from "./StatBox";
import NavBar from "./NavBar";
import HomePage from "./Home";

const { calculateStateObject } = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentView: 'home'
    };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <HomePage/>
        </header>
      </div>
    );
  }
}

export default App;
