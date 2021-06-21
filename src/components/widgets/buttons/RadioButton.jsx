import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const RadioButton = ({ checked, onClick }) => (
  <button
    type="button"
    className={`-radioButtonContainer ${checked ? 'active' : ''}`}
    onClick={onClick}
  >
    <span className="outerCircle">
      <span className="inner" />
    </span>
  </button>
);

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadioButton;
