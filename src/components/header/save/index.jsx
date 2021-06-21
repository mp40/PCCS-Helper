import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderSaveModal from './modal';

import SaveIcon from './SaveIcon';

import styles from './styles.module.css';

const Save = ({ signedIn }) => {
  const [showSaveCharacter, setShowSaveCharacter] = useState(false);

  return (
    <div className={styles.wrapper}>
      {signedIn && (
      <button type="button" className={styles.save} onClick={() => setShowSaveCharacter(true)}>
        <SaveIcon />
      </button>
      )}
      {showSaveCharacter
      && (
      <HeaderSaveModal
        setShowSaveCharacter={setShowSaveCharacter}
      />
      )}
    </div>
  );
};

Save.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default Save;
