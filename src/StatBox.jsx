import React, { Component } from "react";

// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RadialStats from "./radialStats";

const styles = theme => ({
  root: {
    width: '15%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    overflowX: 'hidden',
  },
  table: {
    minWidth: 500,
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

let id = 0;
function createData(name, value) {
  id += 1;
  return { id, name, value};
}

const rows = [
  createData('Strength', 18),
  createData('Intelligence',3),
  createData('Willpower',3),
  createData('Health',3),
  createData('Agility',3),
];

class StatBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table} fixedHeader={false} style={{ width: 'auto', tableLayout: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "30%" }}>Attribute</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <RadialStats/>
                {/* <button className="round">
                {row.value}
                </button> */}
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

      // <div>
      //   <h1>Characteristics</h1>
      //   <div className="Stats">
      //     <div className="Stat-Text">
      //       <span>Strength</span>
      //       <span>Intelligence</span>
      //       <span>Willpower</span>
      //       <span>Health</span>
      //       <span>Agility</span>
      //       <span>Gun Combat</span>
      //       <span>Hand to Hand</span>
      //     </div>
      //     <div className="Stat-Value">
      //       <span>
      //         {" "}
      //         (STR) {this.props.str}{" "}
      //       </span>
      //       <span>
      //         {" "}
      //         (INT) {this.props.int}{" "}
      //       </span>
      //       <span>
      //         {" "}
      //         (WIL) {this.props.wil}{" "}
      //       </span>
      //       <span>
      //         {" "}
      //         (HLT) {this.props.hlt}{" "}
      //       </span>
      //       <span>
      //         {" "}
      //         (AGI) {this.props.agi}{" "}
      //       </span>
      //       <span className="Level"> Level {this.props.gunLevel}</span>
      //       <span className="Level"> Level {this.props.handLevel}</span>
      //     </div>
      //     <div className="Stat-Adjust">
      //       <div className="STR-Adjust">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromStat.bind(this, "str")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToStat.bind(this, "str")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //       <div className="Stat-Up-Down-Wrapper">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromStat.bind(this, "int")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToStat.bind(this, "int")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //       <div className="Stat-Up-Down-Wrapper">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromStat.bind(this, "wil")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToStat.bind(this, "wil")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //       <div className="Stat-Up-Down-Wrapper">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromStat.bind(this, "hlt")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToStat.bind(this, "hlt")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //       <div className="Stat-Up-Down-Wrapper">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromStat.bind(this, "agi")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToStat.bind(this, "agi")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //       <div className="Stat-Up-Down-Wrapper">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromLevel.bind(this, "gunLevel")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToLevel.bind(this, "gunLevel")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //       <div className="Stat-Up-Down-Wrapper">
      //         <button
      //           className="Stat-Up"
      //           onClick={this.props.minusFromLevel.bind(this, "handLevel")}
      //         >
      //           <span>-1</span>
      //         </button>
      //         <button
      //           className="Stat-Down"
      //           onClick={this.props.addToLevel.bind(this, "handLevel")}
      //         >
      //           <span>+1</span>
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

StatBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatBox);
