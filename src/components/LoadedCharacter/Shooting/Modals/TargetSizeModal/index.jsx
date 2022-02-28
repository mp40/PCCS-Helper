import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, WeaponContext } from '../../context';
import { updateTarget } from '../../actions';

import { directFireSizes, indirectFireSizes } from '../../data';

import styles from './styles.module.css';

const TargetSizeSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { list } = useContext(WeaponContext);

  const handleClick = (size) => {
    dispatch(updateTarget(size));
    setModal(false);
  };

  const sizes = list === 'launchers' ? indirectFireSizes : directFireSizes;

  return (
    <>
      <div className="modal-background" />
      <div className={`card-standard ${styles.card}`}>
        {sizes.map((size) => (
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
