/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import TextInput from '../widgets/TextInput';

import './NameCard.css';

const NameCard = ({ name, changeCharacterName }) => {
  const [textInput, toogleTextInput] = useState(false);
  const [newName, updateNewName] = useState('');

  const handleSubmitName = (event) => {
    if (event.key === 'Enter') {
      toogleTextInput(false);
      changeCharacterName(newName);
    }
  };

  const handleNameOnChange = (event) => {
    updateNewName(event.target.value);
  };

  return (
    <div className="--card character-name-card-container">
      <div>Name</div>
      {!textInput && (
      <div
        className="--selectableRow changeName"
        onClick={() => toogleTextInput(true)}
      >
        {name}
      </div>
      )}
      {textInput && (
      <div className="character-name-input">
        <TextInput
          equipmentValue={newName}
          onChange={handleNameOnChange}
          onKeyUp={handleSubmitName}
        />
      </div>
      )}
    </div>
  );
};

NameCard.propTypes = {
  name: PropTypes.string,
  changeCharacterName: PropTypes.func,
};

NameCard.defaultProps = {
  name: '',
};

export default NameCard;
