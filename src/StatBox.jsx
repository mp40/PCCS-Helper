import React, { Component } from "react";
class StatBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Characteristics</h1>
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
            <span>
              {" "}
              (STR) {this.props.str}{" "}
            </span>
            <span>
              {" "}
              (INT) {this.props.int}{" "}
            </span>
            <span>
              {" "}
              (WIL) {this.props.wil}{" "}
            </span>
            <span>
              {" "}
              (HLT) {this.props.hlt}{" "}
            </span>
            <span>
              {" "}
              (AGI) {this.props.agi}{" "}
            </span>
            <span className="Level"> Level {this.props.gunLevel}</span>
            <span className="Level"> Level {this.props.handLevel}</span>
          </div>
          <div className="Stat-Adjust">
            <div className="STR-Adjust">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromStat.bind(this, "str")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToStat.bind(this, "str")}
              >
                <span>+1</span>
              </button>
            </div>
            <div className="Stat-Up-Down-Wrapper">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromStat.bind(this, "int")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToStat.bind(this, "int")}
              >
                <span>+1</span>
              </button>
            </div>
            <div className="Stat-Up-Down-Wrapper">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromStat.bind(this, "wil")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToStat.bind(this, "wil")}
              >
                <span>+1</span>
              </button>
            </div>
            <div className="Stat-Up-Down-Wrapper">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromStat.bind(this, "hlt")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToStat.bind(this, "hlt")}
              >
                <span>+1</span>
              </button>
            </div>
            <div className="Stat-Up-Down-Wrapper">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromStat.bind(this, "agi")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToStat.bind(this, "agi")}
              >
                <span>+1</span>
              </button>
            </div>
            <div className="Stat-Up-Down-Wrapper">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromLevel.bind(this, "gunLevel")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToLevel.bind(this, "gunLevel")}
              >
                <span>+1</span>
              </button>
            </div>
            <div className="Stat-Up-Down-Wrapper">
              <button
                className="Stat-Up"
                onClick={this.props.minusFromLevel.bind(this, "handLevel")}
              >
                <span>-1</span>
              </button>
              <button
                className="Stat-Down"
                onClick={this.props.addToLevel.bind(this, "handLevel")}
              >
                <span>+1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatBox;
