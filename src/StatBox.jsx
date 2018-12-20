import React, { Component } from "react";
class StatBox extends Component {
  constructor(props) {
    super(props);
  }
  addToSTR = () => {
    this.props.addToStat("str");
  };
  minusFromSTR = () => {
    this.props.minusFromStat("str");
  };
  addToINT = () => {
    this.props.addToStat("int");
  };

  minusFromINT = () => {
    this.props.minusFromStat("int");
  };

  addToAGI = () => {
    this.props.addToStat("agi");
  };

  minusFromAGI = () => {
    this.props.minusFromStat("agi");
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
          <span> (STR) {this.props.str} </span>
          <span> (INT) {this.props.int} </span>
          <span> (WIL) {this.props.wil} </span>
          <span> (HLT) {this.props.hlt} </span>
          <span> (AGI) {this.props.agi} </span>
          <span className="Level"> Level {this.props.gunLevel}</span>
          <span className="Level"> Level {this.props.handLevel}</span>
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
              // onClick={this.props.addToStat.bind(this, 2)}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              // onClick={this.props.minusFromStat.bind(this, 2)}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              // onClick={this.props.addToStat.bind(this, 3)}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              // onClick={this.props.minusFromStat.bind(this, 3)}
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
              onClick={this.props.addToLevel.bind(this, "gunLevel")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromLevel.bind(this, "gunLevel")}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="Stat-Up"
              onClick={this.props.addToLevel.bind(this, "handLevel")}
            >
              +1
            </button>
            <button
              className="Stat-Down"
              onClick={this.props.minusFromLevel.bind(this, "handLevel")}
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
