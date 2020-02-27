import React from 'react';
import PropTypes from 'prop-types';
import LevelsCard from '../LevelsCard';
import StatInput from '../widgets/StatInput';
import { isValidAttributeStat } from '../../helpers/gaurds';

import { statKeys, statNames } from './data';

const AttributeCard = ({
  characterStats,
  modifyStrengthValue,
  modifyIntelligenceValue,
  modifyWillpowerValue,
  modifyHealthValue,
  modifyAgilityValue,
}) => {
  const actionsArray = [
    modifyStrengthValue,
    modifyIntelligenceValue,
    modifyWillpowerValue,
    modifyHealthValue,
    modifyAgilityValue,
  ];

  return (
    <LevelsCard className="attributeLevelCard" levelType="attribute">
      {statKeys.map((stat, index) => (
        <StatInput
          statLevel={characterStats[stat]}
          statName={statNames[index]}
          isValid={isValidAttributeStat}
          action={actionsArray[index]}
          key={stat}
        />
      ))}
    </LevelsCard>
  );
};

AttributeCard.propTypes = {
  characterStats: PropTypes.objectOf(PropTypes.number),
  modifyStrengthValue: PropTypes.func,
  modifyIntelligenceValue: PropTypes.func,
  modifyHealthValue: PropTypes.func,
  modifyWillpowerValue: PropTypes.func,
  modifyAgilityValue: PropTypes.func,
};

export default AttributeCard;
