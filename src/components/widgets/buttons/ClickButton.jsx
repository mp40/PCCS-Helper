import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

// mptodo?
const ClickButton = ({ name, onClick }) => (
  <button
    type="button"
    className={`-clickButtonContainer ${name}`}
    onClick={onClick}
  >
    <span className="-clickButton">
      <span className="inner" />
    </span>
  </button>
);

ClickButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

ClickButton.defaultProps = {
  name: 'default',
  onClick: () => {},
};

export default ClickButton;
