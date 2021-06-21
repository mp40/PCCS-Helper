import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ heading, idRef, value, onChange }) => (
  <div className="modificationFormTextInput">
    <div>{heading}</div>
    <input
      type="text"
      autoComplete="off"
      id={idRef}
      value={value}
      onChange={onChange}
    />
  </div>
);

TextInput.propTypes = {
  heading: PropTypes.string,
  idRef: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
