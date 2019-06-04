import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonStandard = ({ onClick, name }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {name}
  </button>
);

ButtonStandard.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default ButtonStandard;
