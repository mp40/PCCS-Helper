import React from 'react';
import PropTypes from 'prop-types';

import KeyPadModal from '../../../widgets/keyPadModal';

const values = [-10, -9, -8, -7, -6, -5, -4, -3, -2 - 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MiscellaneousSelectModal = ({ setMiscellaneous, setModal, miscellaneous }) => {
  const handleClick = (value) => {
    setMiscellaneous(value);
    setModal(false);
  };

  return (
    <KeyPadModal
      values={values}
      handleClick={handleClick}
      selected={miscellaneous}
    />
  );
};

MiscellaneousSelectModal.propTypes = {
  setMiscellaneous: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  miscellaneous: PropTypes.number.isRequired,
};

export default MiscellaneousSelectModal;
