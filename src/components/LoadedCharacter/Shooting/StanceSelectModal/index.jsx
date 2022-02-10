import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const StanceSelectModal = ({ setStance, setModal }) => {
  const stances = ['Standing', 'Kneeling', 'Prone'];

  const handleClick = (stance) => {
    setStance(stance);
    setModal(false);
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`card-standard ${styles.card}`}>
        {stances.map((stance) => (
          <button type="button" key={stance} onClick={() => handleClick(stance)}>
            {stance}
          </button>
        ))}
      </div>
    </>
  );
};

StanceSelectModal.propTypes = {
  setStance: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default StanceSelectModal;
