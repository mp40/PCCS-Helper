import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const speeds = [
  0,
  0.25, 0.5, 1,
  1.5, 2, 2.5,
  3, 3.5, 4,
  4.5, 5,
];

const MovementSelectModal = ({ setMovement, setModal, movement }) => {
  const handleClick = (value, person) => {
    const updatedMovement = { ...movement };
    updatedMovement[person] = value;

    setMovement(updatedMovement);
  };

  const getClassName = (value, person) => {
    if (movement[person] === value) {
      return styles.selected;
    }

    return '';
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`--card ${styles.card}`}>

        <div className={styles.heading}>Shooter, Hex Per Imp</div>
        <div className={styles.buttons}>
          {speeds.map((speed) => (
            <button type="button" className={getClassName(speed, 'shooter')} key={speed} onClick={() => handleClick(speed, 'shooter')}>
              {speed}
            </button>
          ))}
        </div>

        <div className={styles.heading}>Target, Hex Per Imp</div>
        <div className={styles.buttons}>
          {speeds.map((speed) => (
            <button type="button" className={getClassName(speed, 'target')} key={speed} onClick={() => handleClick(speed, 'target')}>
              {speed}
            </button>
          ))}
        </div>

        <button type="button" className={styles.done} onClick={() => setModal(false)}>Done</button>

      </div>
    </>
  );
};

MovementSelectModal.propTypes = {
  setMovement: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  movement: PropTypes.objectOf(PropTypes.number),
};

export default MovementSelectModal;
