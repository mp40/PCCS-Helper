import React from 'react';
import PropTypes from 'prop-types';

import RangeSelectModal from '../RangeSelectModal';
import StanceSelectModal from '../StanceSelectModal';
import TargetSizeSelectModal from '../TargetSizeModal';
import MovementSelectModal from '../MovementSelectModal';
import VisibilitySelectModal from '../VisibilitySelectModal';
import SituationSelectModal from '../SituationSelectModal';
import AimsSelectModal from '../AimsSelectModal';
import MiscellaneousSelectModal from '../MiscellaneousSelectModal';

const AlmModals = ({ modal, setModal }) => {
  if (!modal) {
    return null;
  }

  return (
    <>
      <div className="modal-background" />
      {modal === 'range' && <RangeSelectModal setModal={setModal} />}
      {modal === 'stance' && <StanceSelectModal setModal={setModal} />}
      {modal === 'target' && <TargetSizeSelectModal setModal={setModal} />}
      {modal === 'movement' && <MovementSelectModal setModal={setModal} />}
      {modal === 'situation' && <SituationSelectModal setModal={setModal} />}
      {modal === 'visibility' && <VisibilitySelectModal setModal={setModal} />}
      {modal === 'miscellaneous' && <MiscellaneousSelectModal setModal={setModal} />}
      {modal === 'aims' && <AimsSelectModal setModal={setModal} />}
    </>
  );
};

AlmModals.propTypes = {
  modal: PropTypes.oneOfType([PropTypes.string, null]).isRequired,
  setModal: PropTypes.func.isRequired,
};

export default AlmModals;
