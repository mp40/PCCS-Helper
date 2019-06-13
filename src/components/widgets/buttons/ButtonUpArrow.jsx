import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonUpArrow = ({ onClick }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {String.fromCharCode(8593)}
  </button>
);

ButtonUpArrow.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonUpArrow;
