/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const LoadCharacterModal = ({ closeModal, hydrateCurrentCharacter, savedCharacters }) => {
  const parseDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const handleLoadCharacter = (character) => {
    closeModal();
    hydrateCurrentCharacter(character);
  };

  return (
    <>
      <div className="modal-background" />
      <div className={styles.card}>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => closeModal()}
        />
        <div>Load Character</div>
        {
            savedCharacters.map((character) => (
              <button
                key={character.character_id}
                type="button"
                onClick={() => handleLoadCharacter(character)}
              >
                <span>
                  {character.character_name}
                </span>

                <span>
                  {parseDate(new Date(character.updated_at))}
                </span>

              </button>
            ))
        }
        {savedCharacters.length === 0 && (
          <p>No Saved Characters Found</p>
        )}
      </div>
    </>
  );
};

LoadCharacterModal.propTypes = {
  hydrateCurrentCharacter: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  savedCharacters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LoadCharacterModal;
