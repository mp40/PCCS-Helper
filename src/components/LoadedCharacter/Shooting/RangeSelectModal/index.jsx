import React from 'react';
import PropTypes from 'prop-types';

import KeyPadModal from '../../../widgets/keyPadModal';

import { rangeMods } from '../data';

const RangeSelectModal = ({ range, maxRange, setRange, setModal }) => {
  const handleClick = (rng) => {
    setRange(rng);
    setModal(false);
  };

  return (
    <KeyPadModal
      values={Object.keys(rangeMods).filter((n) => n <= maxRange)}
      handleClick={handleClick}
      selected={range}
    />
  );
};

RangeSelectModal.propTypes = {
  range: PropTypes.number.isRequired,
  maxRange: PropTypes.number.isRequired,
  setRange: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default RangeSelectModal;
