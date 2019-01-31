import React, { Component } from "react";
import "./App.css";
import StatBox from "./StatBox";
import NavBar from "./NavBar";
import HomePage from "./Home";
import CreateChar from "./CharacterGeneration";

const { calculateStateObject } = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentView: 'home'
    };
  }

  setDisplay(view){
    this.setState({currentView: view})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          {this.state.currentView === 'home' && <HomePage 
          setDisplay={this.setDisplay.bind(this)}/>}
          {/* <HomePage
          setDisplay={this.setDisplay.bind(this)}
          /> */}
          {this.state.currentView === 'createChar' && <CreateChar/>}
        </header>
      </div>
    );
  }
}

export default App;
