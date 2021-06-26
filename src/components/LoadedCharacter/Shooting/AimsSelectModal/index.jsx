import React from 'react';
import PropTypes from 'prop-types';

import KeyPadModal from '../../../widgets/keyPadModal';

const AimsSelectModal = ({ aims, maxAims, setAims, setModal }) => {
  const handleClick = (aim) => {
    setAims(aim);
    setModal(false);
  };

  return (
    <KeyPadModal values={[...Array(maxAims).keys()].map((n) => n + 1)} handleClick={handleClick} selected={aims} />
  );
};

AimsSelectModal.propTypes = {
  aims: PropTypes.number.isRequired,
  maxAims: PropTypes.number.isRequired,
  setAims: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default AimsSelectModal;
