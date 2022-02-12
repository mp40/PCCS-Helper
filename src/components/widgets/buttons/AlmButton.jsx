import React from 'react';
import PropTypes from 'prop-types';

const AlmButton = ({ onClick, text, value }) => (
  <button type="button" onClick={onClick}>
    <span>{text}</span>
    <span>{value}</span>
  </button>
);

AlmButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AlmButton;
