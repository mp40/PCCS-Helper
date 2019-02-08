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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleMenu from "./AttributeMenu";
import AttributeButton from "./AttributeMenu";

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
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#aeb885',
  },
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  // },
  menu: {
    width: 200,
  },
  input: {
    display: 'none',
  },
});

class StatBox extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Strength: false,
      Intelligence: false,
      Willpower: false,
      Health: false,
      Agility: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(key){
    this.setState({[key]: !this.state[key]})
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
            <TableRow>
              <TableCell component="th" scope="row">
                Strength
              </TableCell>
              <TableCell>
                <form className={classes.container} noValidate autoComplete="off">
                  <TextField
                  id="outlined-bare"
                  className={classes.textField}
                  defaultValue={this.props.str}
                  margin="normal"
                  variant="outlined"
                  style = {{width: 60, height: 40}}
                  />
                </form>
                {/* <Button variant="contained" className={classes.button} onClick={this.toggleMenu.bind(this, 'Strength')}>
                  {this.props.str}
                  {this.state.Strength ? <AttributeButton/> : null}
                </Button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Intelligence
              </TableCell>
              <TableCell>
                <Button variant="contained" className={classes.button}>
                  {this.props.int}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Health
              </TableCell>
              <TableCell>
                <Button variant="contained" className={classes.button}>
                  {this.props.hlt}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Willpower
              </TableCell>
              <TableCell>
                <Button variant="contained" className={classes.button}>
                  {this.props.wil}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Agility
              </TableCell>
              <TableCell>
                <Button variant="contained" className={classes.button}>
                  {this.props.agi}
                </Button>
              </TableCell>
            </TableRow>
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
