import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import TextInput from '../widgets/TextInput';

import styles from './styles.module.css';

const NameCard = ({ name, changeCharacterName }) => {
  const [textInput, toogleTextInput] = useState(false);
  const [newName, setNewName] = useState('');

  const handleSubmitName = () => {
    toogleTextInput(false);
    changeCharacterName(newName);
  };

  const handleNameOnChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
      <div className={`card-standard ${styles.wrapper}`}>
        <div>Name</div>
        <button
          type="button"
          className={`button-clickable-item-row ${name.length ? '' : styles.empty}`}
          onClick={() => toogleTextInput(true)}
        >
          {name}
        </button>
      </div>
      {textInput
      && (
        <div>
          <div className={`card-standard ${styles.inputCard}`}>
            <TextInput
              heading="Enter Name"
              value={newName}
              onChange={handleNameOnChange}
            />
            <button type="button" className="button--standard" onClick={() => handleSubmitName()}>Submit</button>
          </div>
          <div className="modal-background" />
        </div>
      )}
    </>
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
