import React from 'react';
import PropTypes from 'prop-types';
import LevelsCard from '../LevelsCard';
import StatInput from '../widgets/StatInput';
import { isValidAttributeStat } from '../../helpers/gaurds';

import { statNames } from './data';

const AttributeCard = ({
  str,
  int,
  hlt,
  wil,
  agi,
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
    <LevelsCard levelType="attribute">
      {[str, int, wil, hlt, agi].map((stat, index) => (
        <StatInput
          statLevel={stat}
          statName={statNames[index]}
          isValid={isValidAttributeStat}
          action={actionsArray[index]}
          key={statNames[index]}
        />
      ))}
    </LevelsCard>
  );
};

AttributeCard.propTypes = {
  str: PropTypes.number,
  int: PropTypes.number,
  hlt: PropTypes.number,
  wil: PropTypes.number,
  agi: PropTypes.number,
  modifyStrengthValue: PropTypes.func,
  modifyIntelligenceValue: PropTypes.func,
  modifyHealthValue: PropTypes.func,
  modifyWillpowerValue: PropTypes.func,
  modifyAgilityValue: PropTypes.func,
};

export default AttributeCard;
