import React, { Component } from "react";
import { connect } from 'react-redux';
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import CreateChar from "./components/CharacterGeneration";
import "./App.css";

//TODO Uniform Weight/s
//TODO Body armour
//TODO Firearms
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gear:{
        // uniform: 'Normal',
        helmet: 'None',
        bodyArmour: 'None',
        // equipment: [],
        firearms: [],
        grenades: [],
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar
          />
          {this.props.currentView === 'home' ?
          <HomePage/> :
          null}
          {this.props.currentView === 'createChar' ?
          <CreateChar
          /> :
          null}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ 
    currentView: state.currentView,
   });
}

export default connect(mapStateToProps)(App)