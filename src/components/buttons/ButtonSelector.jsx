import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonSelector = ({ onClick, name }) => (
  <button
    type="button"
    className="select"
    onClick={onClick}
  >
    {name}
  </button>
);

ButtonSelector.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default ButtonSelector;
