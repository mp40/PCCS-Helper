import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ heading, idRef, equipmentValue, onChange, onKeyUpEnter }) => (
  <div className="subContainer">
    <div>{heading}</div>
    <input
      type="text"
      autoComplete="off"
      id={idRef}
      className="equipInput"
      value={equipmentValue}
      onChange={onChange}
      onKeyUp={onKeyUpEnter}// <todo
    />
  </div>
);

TextInput.propTypes = {
  onChange: PropTypes.func,
  equipmentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  heading: PropTypes.string,
  idRef: PropTypes.string,
};

export default TextInput;
