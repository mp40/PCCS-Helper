import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ heading, value, onChange, onKeyUp }) => (
  <div className="subContainer">
    <div>{heading}</div>
    <input
      type="text"
      autoComplete="off"
      className="textInput"
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  </div>
);

TextInput.propTypes = {
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  heading: PropTypes.string,
};

export default TextInput;
