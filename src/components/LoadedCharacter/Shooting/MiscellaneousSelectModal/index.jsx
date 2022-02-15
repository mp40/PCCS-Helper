import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext } from '../context';
import { updateMiscellaneous } from '../actions';

import KeyPadModal from '../../../widgets/keyPadModal';

const values = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MiscellaneousSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { miscellaneous } = useContext(AlmStateContext);

  const handleClick = (value) => {
    dispatch(updateMiscellaneous(value));
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
  setModal: PropTypes.func.isRequired,
};

export default MiscellaneousSelectModal;
