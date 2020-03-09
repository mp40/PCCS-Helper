import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ value, className, checked, handleUpdate }) => {
  const x = 5;
  return (
    <div key={value}>
      <div>{value}</div>
      <button
        type="button"
        className={`${className} radioButton ${checked ? 'checked' : ''}`}
        onClick={() => handleUpdate(value)}
      >
        <span className="outerCircle">
          <span className="inner" />
        </span>
      </button>
    </div>
  );
};

RadioButton.propTypes = {
//   handleSetFilterByType: PropTypes.func,
};

export default RadioButton;
