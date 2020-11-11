import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ value, classNameValue, checked, handleUpdate }) => (
  <div key={value}>
    <div>{value}</div>
    <button
      type="button"
      className={`${classNameValue} radioButton ${checked ? 'checked' : ''}`}
      onClick={() => handleUpdate(value)}
    >
      <span className="outerCircle">
        <span className="inner" />
      </span>
    </button>
  </div>
);

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  classNameValue: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default RadioButton;
