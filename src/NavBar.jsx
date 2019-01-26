import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { 
            main: '#49531f',
            light: lightGreen[700],
            dark: lightGreen[900]
     }
    }
  });

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme ={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            PCCS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);