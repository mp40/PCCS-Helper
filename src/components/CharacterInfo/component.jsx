import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.module.css';

const renderStatLine = (name, value) => (
  <div>
    <span>{`${name}:`}</span>
    <span>{value}</span>
  </div>
);

const CharacterInfo = ({ gunLevel, handLevel, baseSpeed, maxSpeed, knockoutValue, damageBonus }) => (
  <div className={styles.wrapper}>
    <div>
      {renderStatLine('Base Speed', baseSpeed)}
      {renderStatLine('Max Speed', maxSpeed)}
      {renderStatLine('Knockout Val', knockoutValue)}
    </div>
    <div>
      {renderStatLine('Gun Combat', gunLevel)}
      {renderStatLine('Melee Combat', handLevel)}
      {renderStatLine('Damage Bonus', damageBonus)}
    </div>
  </div>
);

CharacterInfo.propTypes = {
  gunLevel: PropTypes.number.isRequired,
  handLevel: PropTypes.number.isRequired,
  baseSpeed: PropTypes.number.isRequired,
  maxSpeed: PropTypes.number.isRequired,
  knockoutValue: PropTypes.number.isRequired,
  damageBonus: PropTypes.number.isRequired,
};

export default CharacterInfo;
