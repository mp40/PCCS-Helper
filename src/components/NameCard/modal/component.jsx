import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import TextInput from '../../widgets/TextInput';

import styles from '../styles.module.css';

const NameCardModal = ({ changeCharacterName, closeModal }) => {
  const [newName, setNewName] = useState('');

  const handleSubmitName = () => {
    closeModal();
    changeCharacterName(newName);
  };

  const handleNameOnChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div className={`card-standard ${styles.inputCard}`}>
      <TextInput
        heading="Enter Name"
        value={newName}
        onChange={handleNameOnChange}
      />
      <button type="button" className="button--standard" onClick={() => handleSubmitName()}>Submit</button>
    </div>
  );
};

NameCardModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  changeCharacterName: PropTypes.func.isRequired,
};

export default NameCardModal;
