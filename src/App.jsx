import React, { Component } from "react";
import "./App.css";

const { calcBaseSpeed, findSAL } = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 5,
      attributeStats: [14, 10, 10, 10, 12],
      baseSpeed: 2,
      maxSpeed: 3.5,
      skillLevels: [4, 2],
      combatStats: { SAL: 10, CE: 7, ISF: 24, ASF: 22 },
      combatActions: [5, 4, 1.5]
    };
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 });
    const newBS = calcBaseSpeed(
      this.state.attributeStats[0],
      this.state.equipmentWeight
    );
    if (newBS) {
      this.setState({ baseSpeed: newBS });
    }
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 5) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 });
    }
    const newBS = calcBaseSpeed(
      this.state.attributeStats[0],
      this.state.equipmentWeight
    );
    if (newBS) {
      this.setState({ baseSpeed: newBS });
    }
  }

  addToStat = index => {
    this.setState(state => {
      const attributeStats = state.attributeStats.map((item, dex) => {
        if (dex === index) {
          return item >= 20 ? 20 : item + 1;
        } else {
          return item;
        }
      });
      return { attributeStats };
    });
  };

  minusFromStat = index => {
    this.setState(state => {
      const attributeStats = state.attributeStats.map((item, dex) => {
        if (dex === index) {
          return item <= 3 ? 3 : item - 1;
        } else {
          return item;
        }
      });
      return { attributeStats };
    });
  };

  addToLevel = index => {
    this.setState(state => {
      const skillLevels = state.skillLevels.map((item, dex) => {
        if (dex === index) {
          return item >= 20 ? 20 : item + 1;
        } else {
          return item;
        }
      });
      const newSAL = skillLevels.map(level => {
        return findSAL(level);
      });
      const combatStats = {
        SAL: newSAL[0],
        CE: newSAL[1],
        ISF: this.state.combatStats.ISF,
        ASF: this.state.combatStats.ASF
      };
      return { skillLevels, combatStats };
    });
  };

  minusFromLevel = index => {
    this.setState(state => {
      const skillLevels = state.skillLevels.map((item, dex) => {
        if (dex === index) {
          return item <= 0 ? 0 : item - 1;
        } else {
          return item;
        }
      });

      const newSAL = skillLevels.map(level => {
        return findSAL(level);
      });
      const combatStats = {
        SAL: newSAL[0],
        CE: newSAL[1],
        ISF: this.state.combatStats.ISF,
        ASF: this.state.combatStats.ASF
      };
      return { skillLevels, combatStats };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            <div className="Title">
              Phonix Command Character Generator *Mock Up*
            </div>
            <div className="Equipment-Weight">
              <span>Equipment Weight: {this.state.equipmentWeight}</span>
              <button className="Weight-Up" onClick={this.addWeight.bind(this)}>
                Add 5lbs
              </button>
              <button
                className="Weight-Down"
                onClick={this.minusWeight.bind(this)}
              >
                Minus 5lbs
              </button>
            </div>
            <div className="Stats">
              <div className="Stat-Text">
                <span>Strength</span>
                <span>Intelligence</span>
              </div>
              <div className="Stat-Value">
                <span> (STR) {this.state.attributeStats[0]} </span>
                <span> (INT) {this.state.attributeStats[1]} </span>
              </div>
              <div className="Stat-Adjust">
                <div>
                  <button
                    className="Stat-Up"
                    onClick={this.addToStat.bind(this, 0)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromStat.bind(this, 0)}
                  >
                    -1
                  </button>
                </div>
                <div>
                  <button
                    className="Stat-Up"
                    onClick={this.addToStat.bind(this, 1)}
                  >
                    +1
                  </button>
                  <button
                    className="Stat-Down"
                    onClick={this.minusFromStat.bind(this, 1)}
                  >
                    -1
                  </button>
                </div>
              </div>
              <p className="Stat">
                Willpower
                <span> (WIL) {this.state.attributeStats[2]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToStat.bind(this, 2)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromStat.bind(this, 2)}
                >
                  -1
                </button>
              </p>
              <p className="Stat">
                Health
                <span> (HLT) {this.state.attributeStats[3]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToStat.bind(this, 3)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromStat.bind(this, 3)}
                >
                  -1
                </button>
              </p>
              <p className="Stat">
                Agility
                <span> (AGI) {this.state.attributeStats[4]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToStat.bind(this, 4)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromStat.bind(this, 4)}
                >
                  -1
                </button>
              </p>
            </div>
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
            <div className="Combat-Level">
              <p>
                <span>Gun Combat Skill Level {this.state.skillLevels[0]} </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToLevel.bind(this, 0)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromLevel.bind(this, 0)}
                >
                  -1
                </button>
              </p>
              <p>
                <span>
                  Hand To Hand Skill Level {this.state.skillLevels[1]} {""}
                </span>
                <button
                  className="Stat-Up"
                  onClick={this.addToLevel.bind(this, 1)}
                >
                  +1
                </button>
                <button
                  className="Stat-Down"
                  onClick={this.minusFromLevel.bind(this, 1)}
                >
                  -1
                </button>
              </p>
              <div className="Combat-Stats">
                <p>
                  Skill Accuracy Level
                  <span> (SAL) {this.state.combatStats.SAL} </span>
                </p>
                <p>
                  Combat Efficiency
                  <span> (CE) {this.state.combatStats.CE}</span>
                </p>
                <p>
                  INT Skill Factor
                  <span> (ISF) {this.state.combatStats.ISF} </span>
                </p>
                <p>
                  AGI Skill Factor
                  <span> (ASF) {this.state.combatStats.AGI} </span>
                </p>
              </div>
              <div className="Combat-Actions">
                Combat Actions
                <div className="Actions">
                  <p>
                    Gun Combat
                    <span> {this.state.combatActions[0]}</span>
                  </p>
                  <p>
                    Hand To Hand
                    <span> {this.state.combatActions[1]}</span>
                  </p>
                  <p>
                    Damage Bonus
                    <span> {this.state.combatActions[2]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
