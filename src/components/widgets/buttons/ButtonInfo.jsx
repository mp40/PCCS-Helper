import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const ButtonInfo = ({ onClick }) => (
  <button
    type="button"
    className="--button standardButton"
    style={{ lineHeight: '70%', padding: '0.25em 0.4em' }}
    onClick={onClick}
  >
                ?
  </button>
);

ButtonInfo.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonInfo;
