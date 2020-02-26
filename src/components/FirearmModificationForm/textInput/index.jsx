import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ heading, idRef, value, onChange }) => (
  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
    <div>{heading}</div>
    <input
      style={{ width: '30%' }}
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
