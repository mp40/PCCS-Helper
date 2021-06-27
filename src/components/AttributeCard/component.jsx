import React from 'react';
import PropTypes from 'prop-types';

import LevelsCard from '../LevelsCard';

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
  const stats = {
    str: { text: 'Strength', value: str, handleClick: modifyStrengthValue },
    int: { text: 'Intelligence', value: int, handleClick: modifyIntelligenceValue },
    wil: { text: 'Willpower', value: wil, handleClick: modifyWillpowerValue },
    hlt: { text: 'Health', value: hlt, handleClick: modifyHealthValue },
    agi: { text: 'Agility', value: agi, handleClick: modifyAgilityValue },
  };

  return (<LevelsCard heading="Attribute" stats={stats} min={3} length={17} />);
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
