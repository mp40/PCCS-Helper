import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ heading, idRef, equipmentValue, onChange, onKeyUp }) => (
  <div className="subContainer">
    <div>{heading}</div>
    <input
      type="text"
      autoComplete="off"
      id={idRef}
      className="textInput"
      value={equipmentValue}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  </div>
);

TextInput.propTypes = {
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  equipmentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  heading: PropTypes.string,
  idRef: PropTypes.string,
};

export default TextInput;
