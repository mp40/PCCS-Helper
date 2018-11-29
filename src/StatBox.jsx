import React, { Component } from "react";
class StatBox extends Component {
  constructor(props) {
    super(props);
  }
  addToSTR = () => {
    this.props.updateBaseSpeed();
    this.props.addToStat(0);
  };
  minusFromSTR = () => {
    this.props.updateBaseSpeed();
    this.props.minusFromStat(0);
  };
  addToINT = () => {
    this.props.addToStat(1);
    this.props.updateISFFromINT(1);
  };

  minusFromINT = () => {
    this.props.minusFromStat(1);
    this.props.updateISFFromINT(-1);
  };

  addToAGI = () => {
    this.props.addToStat(4);
    this.props.updateASFFromAGI(1);
  };

  minusFromAGI = () => {
    this.props.minusFromStat(4);
    this.props.updateASFFromAGI(-1);
  };

  render() {
    return (
      <div className="Stats">
        <div className="Stat-Text">
          <span>Strength</span>
          <span>Intelligence</span>
          <span>Willpower</span>
          <span>Health</span>
          <span>Agility</span>
          <span>Gun Combat</span>
          <span>Hand to Hand</span>
        </div>
        <div className="Stat-Value">
          <span> (STR) {this.props.attributeStats[0]} </span>
          <span> (INT) {this.props.attributeStats[1]} </span>
          <span> (WIL) {this.props.attributeStats[2]} </span>
          <span> (HLT) {this.props.attributeStats[3]} </span>
          <span> (AGI) {this.props.attributeStats[4]} </span>
          <span className="Level"> Level {this.props.skillLevels[0]}</span>
          <span className="Level"> Level {this.props.skillLevels[1]}</span>
        </div>
        <div className="Stat-Adjust">
          <div className="STR-Adjust">
            <button className="Stat-Up" onClick={this.addToSTR.bind(this)}>
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.minusFromSTR.bind(this)}
            >
              -1
            </button>
          </div>
          <div>
            <button className="Stat-Up" onClick={this.addToINT.bind(this)}>
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.minusFromINT.bind(this)}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, 2)}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, 2)}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToStat.bind(this, 3)}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromStat.bind(this, 3)}
            >
              -1
            </button>
          </div>
          <div>
            <button className="Stat-Up" onClick={this.addToAGI.bind(this)}>
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.minusFromAGI.bind(this)}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToLevel.bind(this, 0)}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromLevel.bind(this, 0)}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToLevel.bind(this, 1)}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromLevel.bind(this, 1)}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StatBox;
