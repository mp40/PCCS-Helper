import React from 'react';
import PropTypes from 'prop-types';

import LevelsCard from '../LevelsCard';

const CombatCard = ({
  gunLevel, handLevel, modifyGunCombatLevel, modifyMeleeCombatLevel,
}) => {
  const stats = {
    gun: { text: 'Gun', value: gunLevel, handleClick: modifyGunCombatLevel },
    hand: { text: 'Hand', value: handLevel, handleClick: modifyMeleeCombatLevel },
  };

  return (<LevelsCard heading="Attribute" stats={stats} min={0} length={12} />);
};

CombatCard.propTypes = {
  gunLevel: PropTypes.number,
  handLevel: PropTypes.number,
  modifyGunCombatLevel: PropTypes.func,
  modifyMeleeCombatLevel: PropTypes.func,
};

export default CombatCard;
