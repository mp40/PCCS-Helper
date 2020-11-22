import React, { useState } from 'react';

import HeaderSaveModal from './modal';

import SaveIcon from './SaveIcon';

import styles from './styles.module.css';

const Save = () => {
  const [showSaveCharacter, setShowSaveCharacter] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.save} onClick={() => setShowSaveCharacter(true)}>
        <SaveIcon />
      </button>
      {showSaveCharacter
      && (
      <HeaderSaveModal
        setShowSaveCharacter={setShowSaveCharacter}
      />
      )}
    </div>
  );
};

export default Save;
