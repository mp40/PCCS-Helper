import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext } from '../alm/context';
import { updateRange } from '../alm/actions';

import KeyPadModal from '../../../widgets/keyPadModal';

import { getWeaponMaxRange } from './data';

const RangeSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { range, firearm } = useContext(AlmStateContext);

  const handleClick = (rng) => {
    dispatch(updateRange(rng));
    setModal(false);
  };

  const maxRange = getWeaponMaxRange(firearm.list);

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
