/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import TextInput from '../widgets/TextInput';

import './NameCard.css';

const NameCard = ({ currentCharacter, changeCharacterName }) => {
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
    <div className="character-name-card-container">
      <div>Name</div>
      {!textInput && (
      <div
        className="current-character-name"
        onClick={() => toogleTextInput(true)}
      >
        {currentCharacter}
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
  currentCharacter: PropTypes.string,
  changeCharacterName: PropTypes.func,
};

NameCard.defaultProps = {
  currentCharacter: '',
};

export default NameCard;
