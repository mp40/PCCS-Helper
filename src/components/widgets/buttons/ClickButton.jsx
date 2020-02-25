import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

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
  onClick: PropTypes.func.isRequired,
};

ClickButton.defaultProps = {
  name: 'default',
};

export default ClickButton;
