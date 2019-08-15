import React from 'react';
import { PropTypes } from 'prop-types';

const GameSheet = ({ totalWeight, characterStats, combatStats, gear }) => {
  // todo
  const hold = () => {
    // holding
  };
  return (
    <div>placeholder</div>
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
