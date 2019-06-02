import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonDownArrow = ({ onClick }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {String.fromCharCode(8595)}
  </button>
);

ButtonDownArrow.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonDownArrow;
