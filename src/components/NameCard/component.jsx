/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import TextInput from '../widgets/TextInput';

import './NameCard.css';

const NameCard = ({ currentCharacter, changeCharacterName }) => {
  const [textInput, toogleTextInput] = useState(false);

  const handleNameOnChange = (event) => {
    if (event.key === 'Enter') {
      toogleTextInput(false);
    }
    changeCharacterName(event.target.value);
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
          equipmentValue={currentCharacter}
          onChange={handleNameOnChange}
          onKeyUpEnter={handleNameOnChange}
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
