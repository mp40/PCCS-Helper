import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonSlim = ({ onClick, name }) => (
  <button
    type="button"
    className="buttonSlim"
    onClick={onClick}
  >
    {name}
  </button>
);

ButtonSlim.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default ButtonSlim;
