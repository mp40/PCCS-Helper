import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import KeyPad from '../../../widgets/keyPad';

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

  return (
    <>
      <div className="modal-background" />

      <div className={`card-standard ${styles.card}`}>
        {['shooter', 'target'].map((person) => (
          <Fragment key={person}>
            <div className={styles.heading}>{`${person}, Hex Per Imp`}</div>
            <KeyPad
              handleClick={(value) => handleClick(value, person)}
              values={speeds}
              selected={movement[person]}
            />
          </Fragment>
        ))}
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
