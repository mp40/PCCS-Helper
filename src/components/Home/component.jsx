import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoadCharacterModal from '../loadCharacter';

import BetaTemp from '../BetaTemp'; // mptodo delete this once at MVP

import styles from './styles.module.css';

const HomePage = ({ viewCreateCharacter }) => {
  const [showLoadModal, setShowLoadModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1>
        Welcome To Phoenix Command Tools
      </h1>
      <button
        type="button"
        onClick={() => viewCreateCharacter()}
      >
        Create Character
      </button>

      {/* mptodo - unhide this and sort out related code
      <button
        type="button"
        onClick={() => setShowLoadModal(!showLoadModal)}
      >
        Load Character
      </button> */}

      {showLoadModal && (
        <LoadCharacterModal setShowLoadModal={setShowLoadModal} />
      )}

      <BetaTemp />
    </div>
  );
};

HomePage.propTypes = {
  viewCreateCharacter: PropTypes.func.isRequired,
};

export default HomePage;
