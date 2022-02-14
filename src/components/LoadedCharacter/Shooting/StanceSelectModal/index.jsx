import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext } from '../alm/context';
import { updateStance } from '../alm/actions';

import styles from './styles.module.css';

const StanceSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);

  const stances = ['Standing', 'Kneeling', 'Prone'];

  const handleClick = (stance) => {
    dispatch(updateStance(stance));
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
  setModal: PropTypes.func.isRequired,
};

export default StanceSelectModal;
