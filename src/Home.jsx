import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function HomePage(props) {
  const { classes } = props;

  return (
    <div style={{textAlign: 'center'}}>
        <h1>
            Welcome To Phoenix Command Tools
        </h1>
      <Button  id="activateCreateChar" onClick={props.setDisplay.bind(this, "createChar")} variant="contained" className={classes.button}>
        Create Character
      </Button>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);