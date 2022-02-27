import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext, WeaponContext } from '../../context';
import { updateRange } from '../../actions';

import KeyPadModal from '../../../../widgets/keyPadModal';

import { getWeaponMaxRange } from './data';

const RangeSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const weapon = useContext(WeaponContext);
  const { range } = useContext(AlmStateContext);

  const handleClick = (rng) => {
    dispatch(updateRange(rng));
    setModal(false);
  };

  const maxRange = getWeaponMaxRange(weapon.list);

  return (
    <KeyPadModal
      values={maxRange}
      handleClick={handleClick}
      selected={range}
    />
  );
};

RangeSelectModal.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default RangeSelectModal;
