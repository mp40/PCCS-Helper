import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext } from '../context';
import { updateTarget } from '../actions';

import { targetSizeMods } from '../alm/data';

import styles from './styles.module.css';

const TargetSizeSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);

  const handleClick = (size) => {
    dispatch(updateTarget(size));
    setModal(false);
  };

  return (
    <>
      <div className="modal-background" />
      <div className={`card-standard ${styles.card}`}>
        {Object.keys(targetSizeMods).map((size) => (
          <button type="button" key={size} onClick={() => handleClick(size)}>
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

TargetSizeSelectModal.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default TargetSizeSelectModal;
