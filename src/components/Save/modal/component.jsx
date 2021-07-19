import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { currentCharacterShape } from '../../../helpers/proptypeShapes';

import { fetchPostCharacter, fetchPutCharacter } from '../../../fetch';

import { parseDate, buildRequestPayload } from './data';

import styles from './styles.module.css';

const SaveModal = (
  { characters, currentCharacter, setShowSaveCharacter, addSavedCharacter, updateSavedCharacter },
) => {
  const [showError, setShowError] = useState(false);

  const storeNewCharacter = (character) => {
    const storedCharacters = JSON.parse(sessionStorage.getItem('savedCharacters'));

    if (storedCharacters) {
      sessionStorage.setItem('savedCharacters', JSON.stringify(
        [
          ...storedCharacters,
          character,
        ],
      ));
    }

    addSavedCharacter(character);
  };

  const updateStoredCharacter = (character) => {
    const storedCharacters = JSON.parse(sessionStorage.getItem('savedCharacters'));

    if (storedCharacters) {
      const updatedStorage = storedCharacters.map((storedCharacter) => {
        if (character.character_id === storedCharacter.character_id) {
          return character;
        }

        return storedCharacter;
      });

      sessionStorage.setItem('savedCharacters', JSON.stringify(updatedStorage));
    }

    updateSavedCharacter(character);
  };

  const handleSaveCharacter = async () => {
    const res = await fetchPostCharacter(buildRequestPayload(currentCharacter));

    if (res.error) {
      setShowError(true);
      return;
    }

    storeNewCharacter(res.character);

    setShowSaveCharacter(false);
  };

  const handleUpdateCharacter = async (characterId) => {
    const res = await fetchPutCharacter(buildRequestPayload(currentCharacter), characterId);

    if (res.error) {
      setShowError(true);
      return;
    }

    updateStoredCharacter(res.character);

    setShowSaveCharacter(false);
  };

  return (
    <>
      <div className="modal-background" />
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
              {character.character_name}
            </span>

            <span>
              {parseDate(new Date(character.updated_at))}
            </span>

          </button>
        ),
        )}
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

SaveModal.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCharacter: currentCharacterShape.isRequired,
  setShowSaveCharacter: PropTypes.func.isRequired,
  addSavedCharacter: PropTypes.func.isRequired,
  updateSavedCharacter: PropTypes.func.isRequired,
};

export default SaveModal;
