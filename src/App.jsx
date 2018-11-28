import React, { Component } from "react";
import "./App.css";
// import Button from "@material-ui/core/Button";
//import "../test.jsx";

// import { test } from ".";

// import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// });

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// });

// function FullWidthGrid(props){
//   const {classes} = props;
// }

// const { calcBaseSpeed } = require(".");
// const { calcBaseSpeed, findSAL } = require(".");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 5,
      attributeStats: [14, 10, 10, 10, 12],
      //speed: [],
      baseSpeed: 2,
      maxSpeed: 3.5,
      skillLevels: [4, 2],
      combatStats: [11, 8, 24, 22],
      combatActions: [5, 4, 1.5]
    };
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 });
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 5) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 });
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
      return { skillLevels };
    });
    this.updateSAL();
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
      return { skillLevels };
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
              <p className="Stat">
                Strength
                <span> (STR) {this.state.attributeStats[0]} </span>
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
              </p>
              <p>
                Intelligence
                <span> (INT) {this.state.attributeStats[1]} </span>
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
              </p>
              <p>
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
              <p>
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
              <p>
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
                  <span> (SAL) {this.state.combatStats[0]} </span>
                </p>
                <p>
                  Combat Efficiency
                  <span> (CE) {this.state.combatStats[1]}</span>
                </p>
                <p>
                  INT Skill Factor
                  <span> (ISF) {this.state.combatStats[2]} </span>
                </p>
                <p>
                  AGI Skill Factor
                  <span> (ASF) {this.state.combatStats[3]} </span>
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
