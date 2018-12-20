import React, { Component } from "react";
import "./App.css";
import StatBox from "./StatBox";

const { calculateStateObject } = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 10,
      str: 14,
      int: 10,
      wil: 10,
      hlt: 10,
      agi: 12,
      baseSpeed: 0,
      maxSpeed: 0,
      gunLevel: 4,
      handLevel: 2,
      combatStats: { SAL: 0, CE: 0, ISF: 0, ASF: 0 },
      combatActions: [0, 0]
    };
  }

  componentDidMount() {
    // (STR, Weight, AGI, Gun Level, INT, Hand Level)
    const seedData = calculateStateObject(14, 10, 12, 4, 10, 2);
    console.log(seedData);
    this.setState({
      equipmentWeight: 10,
      baseSpeed: seedData.baseSpeed,
      maxSpeed: seedData.maxSpeed,
      combatStats: {
        SAL: seedData.sal,
        CE: seedData.ce,
        ISF: seedData.isf,
        ASF: seedData.asf
      },
      combatActions: [seedData.gunActions, seedData.handActions]
    });
  }

  updateAllStats() {
    // (STR, Weight, AGI, Gun Level, INT, Hand Level)
    const str = this.state.str;
    const weight = this.state.equipmentWeight;
    const agi = this.state.agi;
    const gun = this.state.gunLevel;
    const int = this.state.int;
    const hand = this.state.handLevel;
    const newData = calculateStateObject(str, weight, agi, gun, int, hand);
    this.setState({
      baseSpeed: newData.baseSpeed,
      maxSpeed: newData.maxSpeed,
      combatStats: {
        SAL: newData.sal,
        CE: newData.ce,
        ISF: newData.isf,
        ASF: newData.asf
      },
      combatActions: [newData.gunActions, newData.handActions]
    });
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 }, () => {
      this.updateAllStats();
    });
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 10) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 }, () => {
        this.updateAllStats();
      });
    }
  }

  addToStat = key => {
    this.setState({ [key]: this.state[key] + 1 }, () => {
      this.updateAllStats();
    });
  };

  minusFromStat = key => {
    this.setState({ [key]: this.state[key] - 1 }, () => {
      this.updateAllStats();
    });
  };

  addToLevel = key => {
    this.setState({ [key]: this.state[key] + 1 }, () => {
      this.updateAllStats();
    });
  };

  minusFromLevel = key => {
    this.setState({ [key]: this.state[key] - 1 }, () => {
      this.updateAllStats();
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <StatBox
              str={this.state.str}
              int={this.state.int}
              wil={this.state.wil}
              hlt={this.state.hlt}
              agi={this.state.agi}
              gunLevel={this.state.gunLevel}
              handLevel={this.state.handLevel}
              addToStat={this.addToStat.bind(this)}
              minusFromStat={this.minusFromStat.bind(this)}
              addToLevel={this.addToLevel.bind(this)}
              minusFromLevel={this.minusFromLevel.bind(this)}
            />
            <div className="Game-Info">
              <div className="Equipment-Weight">
                <div>
                  <span className="Weight-Tag">
                    Equipment Weight: {this.state.equipmentWeight}
                  </span>
                  <button
                    className="Weight-Up"
                    onClick={this.addWeight.bind(this)}
                  >
                    Add 5lbs
                  </button>
                  <button
                    className="Weight-Down"
                    onClick={this.minusWeight.bind(this)}
                  >
                    Minus 5lbs
                  </button>
                </div>
                <div />
              </div>

              <div className="Combat-Actions-Container">
                <div className="Combat-Actions">
                  <p>
                    Skill Accuracy Level
                    <span> (SAL) {this.state.combatStats.SAL} </span>
                  </p>
                  <p>
                    Combat Efficiency
                    <span> (CE) {this.state.combatStats.CE}</span>
                  </p>
                </div>
              </div>
              <div className="Combat-Actions-Container">
                <div className="Combat-Actions">
                  <p>
                    INT Skill Factor
                    <span> (ISF) {this.state.combatStats.ISF} </span>
                  </p>
                  <p>
                    AGI Skill Factor
                    <span> (ASF) {this.state.combatStats.ASF} </span>
                  </p>
                </div>
              </div>
              <div className="Combat-Actions-Container">
                <div className="Combat-Actions">
                  <p>
                    Gun Combat Actions
                    <span> {this.state.combatActions[0]}</span>
                  </p>
                  <p>
                    Hand To Hand Actions
                    <span> {this.state.combatActions[1]}</span>
                  </p>
                </div>
              </div>
              <div className="Combat-Actions-Container">
                <div className="Combat-Actions">
                  <div className="Speed">
                    <p>
                      Base Speed
                      <span> BS {this.state.baseSpeed} </span>
                    </p>
                    <p>
                      Maximum Speed
                      <span> MS {this.state.maxSpeed}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h1
                  onClick={() => this.setState({ button: !this.state.button })}
                >
                  Phoenix Command Helper
                </h1>
                {this.state.button ? (
                  <button
                    className="Turbo"
                    onClick={() => this.setState({ done: !this.state.done })}
                  >
                    Turbo Mode
                  </button>
                ) : null}

                {this.state.done ? <h2>TDD - Go Fast!</h2> : null}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
