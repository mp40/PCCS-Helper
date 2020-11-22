import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { currentCharacterShape } from '../../../../helpers/proptypeShapes';

import { fetchPostCharacter, fetchPutCharacter } from '../../../../fetch';

import { parseDate, buildRequestPayload } from './data';

import styles from './styles.module.css';

const HeaderSaveModal = ({ characters, currentCharacter, setShowSaveCharacter }) => {
  const [showError, setShowError] = useState(false);

  const handleSaveCharacter = async () => {
    const res = await fetchPostCharacter(buildRequestPayload(currentCharacter));

    if (res.error) {
      setShowError(true);
      return;
    }

    setShowSaveCharacter(false);
  };

  const handleUpdateCharacter = async () => {
    const res = await fetchPutCharacter(buildRequestPayload(currentCharacter));

    if (res.error) {
      setShowError(true);
      return;
    }

    setShowSaveCharacter(false);
  };

  return (
    <>
      <div className={styles.modal} />
      <div className={styles.card}>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => setShowSaveCharacter(false)}
        />
        <div>Save Character</div>
        {characters.map((character) => (
          <button
            key={character.character_id}
            type="button"
            onClick={() => handleUpdateCharacter(character.character_id)}
          >
            <span>
              {character.name}
            </span>

            <span>
              {parseDate(new Date(character.updated_at))}
            </span>

          </button>
        ))}
        {characters.length < 5 && (
        <button
          type="button"
          onClick={() => handleSaveCharacter()}
        >
          New
        </button>
        )}
        {showError && (
          <p>Save Error</p>
        )}
      </div>
    </>
  );
};

HeaderSaveModal.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCharacter: currentCharacterShape.isRequired,
  setShowSaveCharacter: PropTypes.func.isRequired,
};

export default HeaderSaveModal;
