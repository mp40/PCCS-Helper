import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext } from '../context';
import { updateMovement } from '../actions';

import KeyPad from '../../../widgets/keyPad';

import styles from './styles.module.css';

const speeds = [
  0,
  0.25, 0.5, 1,
  1.5, 2, 2.5,
  3, 3.5, 4,
  4.5, 5,
];

const MovementSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { movement } = useContext(AlmStateContext);

  const handleClick = (value, person) => {
    const updatedMovement = { ...movement };
    updatedMovement[person] = value;

    dispatch(updateMovement(updatedMovement));
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
  setModal: PropTypes.func.isRequired,
};

export default MovementSelectModal;
