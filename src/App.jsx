import React, { Component } from "react";
import "./App.css";
import StatBox from "./StatBox";

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//  card: {
//    minWidth: 275,
//  },
//  bullet: {
//    display: 'inline-block',
//    margin: '0 2px',
//    transform: 'scale(0.8)',
//  },
//  title: {
//    fontSize: 14,
//  },
//  pos: {
//    marginBottom: 12,
//  },
// };

// function SimpleCard(props) {
//  const { classes } = props;
//  const bull = <span className={classes.bullet}>•</span>;

const {
  calcBaseSpeed,
  findSAL,
  calcMaxSpeed,
  calcISF,
  calcCombatActions
  //calcGunCAAtOnce
} = require("./helperFunctions");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentWeight: 10,
      attributeStats: [14, 10, 10, 10, 12],
      baseSpeed: 2,
      maxSpeed: 3.5,
      skillLevels: [4, 2],
      combatStats: { SAL: 10, CE: 7, ISF: 24, ASF: 22 },
      combatActions: [5, 4]
    };
  }

  addWeight() {
    this.setState({ equipmentWeight: this.state.equipmentWeight + 5 });
    this.updateBaseSpeed();
  }

  minusWeight() {
    if (this.state.equipmentWeight <= 10) {
      this.setState({ equipmentWeight: this.state.equipmentWeight });
    } else {
      this.setState({ equipmentWeight: this.state.equipmentWeight - 5 });
    }
    this.updateBaseSpeed();
  }

  updateASFFromAGI = adjust => {
    const newASF = calcISF(
      this.state.combatStats.CE,
      this.state.attributeStats[4],
      adjust
    );
    this.updateCombatActionsViaASFFromAGI(newASF);
    this.setState({
      combatStats: {
        SAL: this.state.combatStats.SAL,
        CE: this.state.combatStats.CE,
        ISF: this.state.combatStats.ISF,
        ASF: newASF
      }
    });
  };

  updateCombatActionsViaASFFromAGI = updatedASF => {
    let tempMS = this.state.maxSpeed.filter(function(val) {
      return val;
    });
    const newHandActions = calcCombatActions(tempMS[0], updatedASF);
    if (newHandActions) {
      this.setState({
        combatActions: [this.state.combatActions[0], newHandActions]
      });
    }
  };

  updateISFFromINT = adjust => {
    const newISF = calcISF(
      this.state.combatStats.SAL,
      this.state.attributeStats[1],
      adjust
    );
    this.updateCombatActionsViaISFFromINT(newISF);
    this.setState({
      combatStats: {
        SAL: this.state.combatStats.SAL,
        CE: this.state.combatStats.CE,
        ISF: newISF,
        ASF: this.state.combatStats.ASF
      }
    });
  };

  updateCombatActionsViaISFFromINT = updatedISF => {
    let tempMS = this.state.maxSpeed;
    if (Array.isArray(tempMS)) {
      tempMS = tempMS.filter(function(val) {
        return val;
      });
      tempMS = tempMS[0];
    }
    const newGunActions = calcCombatActions(tempMS, updatedISF);
    if (newGunActions) {
      this.setState({ combatActions: [newGunActions] });
    }
  };

  updateBaseSpeed = () => {
    const newBS = calcBaseSpeed(
      this.state.attributeStats[0],
      this.state.equipmentWeight
    );
    if (newBS) {
      const filteredNewBS = newBS.filter(val => {
        return val;
      });
      this.updateMS(filteredNewBS);
      this.setState({ baseSpeed: newBS });
    }
  };

  updateMS = newBS => {
    const newMS = calcMaxSpeed(this.state.attributeStats[4], newBS);
    if (newMS) {
      const filteredNewMS = newMS.filter(val => {
        return val;
      });
      this.updateCombatActions(filteredNewMS);
      this.setState({ maxSpeed: newMS });
    }
  };

  updateCombatActions = maxSp => {
    const newGunActions = calcCombatActions(
      maxSp[0],
      this.state.combatStats.ISF
    );
    if (newGunActions) {
      this.setState({ combatActions: [newGunActions] });
    }
    const newHandActions = calcCombatActions(
      maxSp[0],
      this.state.combatStats.ASF
    );
    if (newHandActions) {
      this.setState({
        combatActions: [this.state.combatActions[0], newHandActions]
      });
    }
  };

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
      this.updateCombatActionsViaISFFromINT(
        calcISF(newSAL[0], this.state.attributeStats[1])
      );
      this.updateHandActionsViaASFFromAGI(
        calcISF(newSAL[1], this.state.attributeStats[4])
      );
      const combatStats = {
        SAL: newSAL[0],
        CE: newSAL[1],
        ISF: calcISF(newSAL[0], this.state.attributeStats[1]),
        ASF: calcISF(newSAL[1], this.state.attributeStats[4])
      };
      return { skillLevels, combatStats };
    });
  };

  updateHandActionsViaASFFromAGI = updatedASF => {
    let tempMS = this.state.maxSpeed;
    if (Array.isArray(tempMS)) {
      tempMS = tempMS.filter(function(val) {
        return val;
      });
      tempMS = tempMS[0];
    }
    const newHandActions = calcCombatActions(tempMS, updatedASF);
    if (newHandActions) {
      this.setState({
        combatActions: [this.state.combatActions[0], newHandActions]
      });
    }
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
      this.updateCombatActionsViaISFFromINT(
        calcISF(newSAL[0], this.state.attributeStats[1])
      );
      this.updateHandActionsViaASFFromAGI(
        calcISF(newSAL[1], this.state.attributeStats[4])
      );
      const combatStats = {
        SAL: newSAL[0],
        CE: newSAL[1],
        ISF: calcISF(newSAL[0], this.state.attributeStats[1]),
        ASF: calcISF(newSAL[1], this.state.attributeStats[4])
      };
      return { skillLevels, combatStats };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrapper">
            {/* <CardContent>
              <div className="Title">Phonix Command Stat Generator</div>
            </CardContent> */}
            <StatBox
              attributeStats={this.state.attributeStats}
              skillLevels={this.state.skillLevels}
              updateBaseSpeed={this.updateBaseSpeed.bind(this)}
              addToStat={this.addToStat.bind(this)}
              minusFromStat={this.minusFromStat.bind(this)}
              updateISFFromINT={this.updateISFFromINT.bind(this)}
              updateASFFromAGI={this.updateASFFromAGI.bind(this)}
              addToLevel={this.addToLevel.bind(this)}
              minusFromLevel={this.addToLevel.bind(this)}
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
                <h1>Phonenix Command Helper</h1>
                <button
                  className="Turbo"
                  onClick={() => this.setState({ done: !this.state.done })}
                >
                  Turbo Mode
                </button>
                {this.state.done ? (
                  <h2>I should have done another beer app</h2>
                ) : null}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRquired,
// };

/* eslint-disable*/
// export default withStyles(styles(SimpleCard))
export default App;
