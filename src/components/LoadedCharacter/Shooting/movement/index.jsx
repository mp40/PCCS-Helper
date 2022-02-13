import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MovementSelectModal from '../MovementSelectModal';
import AlmButton from '../../../widgets/buttons/AlmButton';

import { findSpeedMods } from './data';

const Movement = ({ setMovementAlm, range }) => {
  const [movement, setMovement] = useState({ shooter: 0, target: 0 });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const movementAlm = findSpeedMods(movement.shooter + movement.target, range);
    setMovementAlm(movementAlm);
  }, [movement]);

  return (
    <>
      <AlmButton
        text="Movement"
        value={`Shooter:${movement.shooter} | Target:${movement.target}`}
        onClick={() => setModal(true)}
      />
      {
        modal && <MovementSelectModal movement={movement} setMovement={setMovement} setModal={setModal} />
      }
    </>
  );
};

Movement.propTypes = {
  range: PropTypes.number.isRequired,
  setMovementAlm: PropTypes.func.isRequired,
};

export default Movement;
