import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const LoadCharacterModal = ({ setShowLoadModal, selectCurrentView, hydrateCurrentCharacter, savedCharacters }) => {
  const parseDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const handleLoadCharacter = (character) => {
    setShowLoadModal(false);
    selectCurrentView('playCharacter');
    hydrateCurrentCharacter(character);
  };

  return (
    <>
      <div className={styles.modal} />
      <div className={styles.card}>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => setShowLoadModal(false)}
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
  selectCurrentView: PropTypes.func.isRequired,
  hydrateCurrentCharacter: PropTypes.func.isRequired,
  setShowLoadModal: PropTypes.func.isRequired,
  savedCharacters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LoadCharacterModal;
