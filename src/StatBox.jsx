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
            <span
              style={{
                color:
                  this.props.str < 7
                    ? "red"
                    : this.props.str < 9
                    ? "orange"
                    : this.props.str > 15
                    ? "blue"
                    : this.props.str > 12
                    ? "royalblue"
                    : "black"
              }}
            >
              {" "}
              (STR) {this.props.str}{" "}
            </span>
            <span
              style={{
                color:
                  this.props.int < 7
                    ? "red"
                    : this.props.int < 9
                    ? "orange"
                    : this.props.int > 15
                    ? "blue"
                    : this.props.int > 12
                    ? "royalblue"
                    : "black"
              }}
            >
              {" "}
              (INT) {this.props.int}{" "}
            </span>
            <span
              style={{
                color:
                  this.props.wil < 7
                    ? "red"
                    : this.props.wil < 9
                    ? "orange"
                    : this.props.wil > 15
                    ? "blue"
                    : this.props.wil > 12
                    ? "royalblue"
                    : "black"
              }}
            >
              {" "}
              (WIL) {this.props.wil}{" "}
            </span>
            <span
              style={{
                color:
                  this.props.hlt < 7
                    ? "red"
                    : this.props.hlt < 9
                    ? "orange"
                    : this.props.hlt > 15
                    ? "blue"
                    : this.props.hlt > 12
                    ? "royalblue"
                    : "black"
              }}
            >
              {" "}
              (HLT) {this.props.hlt}{" "}
            </span>
            <span
              style={{
                color:
                  this.props.agi < 7
                    ? "red"
                    : this.props.agi < 9
                    ? "orange"
                    : this.props.agi > 15
                    ? "blue"
                    : this.props.agi > 12
                    ? "royalblue"
                    : "black"
              }}
            >
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
