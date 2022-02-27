import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext, WeaponContext } from '../context';
import { updateAims } from '../actions';

import styles from './styles.module.css';

const Aiming = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const firearm = useContext(WeaponContext);
  const { aims } = useContext(AlmStateContext);

  const maxAims = firearm.aim.ac.slice(-1)[0];

  const handleIncrement = () => {
    if (aims === maxAims) {
      return;
    }

    dispatch(updateAims(aims + 1));
  };

  const handleDecrement = () => {
    if (aims === 1) {
      return;
    }

    dispatch(updateAims(aims - 1));
  };

  return (
    <>
      <button type="button" onClick={() => setModal('aims')}>
        <span>
          Aims
        </span>
        <span>
          {aims}
        </span>
      </button>
      <button className={aims === maxAims ? styles.unavailable : ''} type="button" onClick={() => handleIncrement()}>+</button>
      <button className={aims === 1 ? styles.unavailable : ''} type="button" onClick={() => handleDecrement()}>-</button>
    </>
  );
};

Aiming.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default Aiming;
