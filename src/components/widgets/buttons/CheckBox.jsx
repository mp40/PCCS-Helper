import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

//mptodo?
const CheckBox = ({ name, onClick, isActive }) => {
  const [isChecked, toggleChecked] = useState(isActive);
  const handleClick = () => {
    onClick();
    toggleChecked(!isChecked);
  };
  return (
    <button
      type="button"
      className={name}
      onClick={() => handleClick}
    >
      <span className={`-checkBox ${isChecked ? 'active' : ''}`}>
        <span className="inner" />
      </span>
    </button>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

CheckBox.defaultProps = {
  name: 'default',
  onClick: () => {},
  isActive: false,
};

export default CheckBox;
