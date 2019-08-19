import React from 'react';
import { PropTypes } from 'prop-types';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';

import './GameSheet.css';
// import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import { testFAMAS } from '../../helpers/testHelpers';

const GameSheet = ({ totalWeight, characterStats, combatStats, gear }) => {
  // todo
  const hold = () => {
    // holding
  };
  return (
    <div className="a4GameSheet">
      <div className="a4ContentContainer">
        <WeaponsCardWeaponStats gunObj={testFAMAS()} sal={7} size="a4" />
      </div>
    </div>
  );
};

GameSheet.propTypes = {
  totalWeight: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  characterStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  combatStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  gear: PropTypes.object,
};

export default GameSheet;
