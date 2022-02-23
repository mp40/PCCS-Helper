import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlmDispatchContext, AlmStateContext, FirearmContext } from '../../context';
import { updateAims } from '../../actions';

import KeyPadModal from '../../../../widgets/keyPadModal';

const AimsSelectModal = ({ setModal }) => {
  const dispatch = useContext(AlmDispatchContext);
  const { aims } = useContext(AlmStateContext);
  const firearm = useContext(FirearmContext);

  const maxAims = firearm.aim.ac.slice(-1)[0];

  const handleClick = (aim) => {
    dispatch(updateAims(aim));
    setModal(false);
  };

  return (
    <KeyPadModal values={[...Array(maxAims).keys()].map((n) => n + 1)} handleClick={handleClick} selected={aims} />
  );
};

AimsSelectModal.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default AimsSelectModal;
