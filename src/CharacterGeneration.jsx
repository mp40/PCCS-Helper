import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

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
  input: {
    display: 'none',
  },
});


class CreateChar extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        Place Holder
      </div>
    );
  }
}


CreateChar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateChar);