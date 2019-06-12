import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonDeleteX = ({ onClick }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
                X
  </button>
);

ButtonDeleteX.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonDeleteX;
