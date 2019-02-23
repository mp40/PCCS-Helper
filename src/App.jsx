import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./Home";
import CreateChar from "./CharacterGeneration";

const { calculateStateObject } = require("./helperFunctions");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'home',
      toggleEditValue: false,
      equipmentWeight: 10,
      str: 10,
      int: 10,
      wil: 10,
      hlt: 10,
      agi: 10,
      baseSpeed: 0,
      maxSpeed: 0,
      gunLevel: 0,
      handLevel: 0,
      combatStats: { SAL: 0, CE: 0, ISF: 0, ASF: 0 },
      combatActions: [0, 0],
      knockoutValue: 0,
      damageBonus: 0
    };
  }

  setDisplay(view){
    this.setState({currentView: view})
  }

  weightWarningOn() {
    this.setState({ weightWarningMsg: true });
  }

  weightWarningOff() {
    this.setState({ weightWarningMsg: false });
  }
  updateAllStats() {
    // (STR, Weight, AGI, Gun Level, INT, Hand Level)
    const str = this.state.str;
    const weight = this.state.equipmentWeight;
    const agi = this.state.agi;
    const gun = this.state.gunLevel;
    const int = this.state.int;
    const hand = this.state.handLevel;
    const wil = this.state.wil;
    const newData = calculateStateObject(str, weight, agi, gun, int, hand, wil);
    if (newData.baseSpeed === 0) {
      this.weightWarningOn();
    } else {
      this.weightWarningOff();
    }
    this.setState({
      baseSpeed: newData.baseSpeed,
      maxSpeed: newData.maxSpeed,
      combatStats: {
        SAL: newData.sal,
        CE: newData.ce,
        ISF: newData.isf,
        ASF: newData.asf
      },
      combatActions: [newData.gunActions, newData.handActions],
      knockoutValue: newData.knockoutValue,
      damageBonus: newData.damageBonus,
      toggleEditValue: false
    });
  }

  updateAttribute = (attribute, value)=>{
      this.setState({[attribute]: value}, ()=>{
        this.updateAllStats();
      })
  };

  settingAttribute(key){
    this.setState({toggleEditValue: key})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          {this.state.currentView === 'home' ?
          <HomePage
            setDisplay={this.setDisplay.bind(this)}
          /> :
          null}
          {this.state.currentView === 'createChar' ?
          <CreateChar
            {...this.state}
            updateAttribute={this.updateAttribute.bind(this)}
            settingAttribute={this.settingAttribute.bind(this)}
          /> :
          null}
        </header>
      </div>
    );
  }
}

export default App;
