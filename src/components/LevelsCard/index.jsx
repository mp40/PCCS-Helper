import React, { useState } from 'react';
import PropTypes from 'prop-types';

import KeyPadModal from '../widgets/keyPadModal';

import styles from './styles.module.css';

const LevelsCard = ({
  heading,
  stats,
  min,
  length,
}) => {
  const [valueToUpdate, setValueToUpdate] = useState(false);

  const handleClick = (stat, value) => {
    stats[stat].handleClick(value);
    setValueToUpdate(false);
  };

  return (
    <div className={`card-standard ${styles.wrapper}`}>
      <div className={styles.heading}>
        <span>{heading}</span>
        <span>Value</span>
      </div>
      {Object.keys(stats).map((stat) => (
        <button type="button" className="button-clickable-item-row" key={stat} onClick={() => setValueToUpdate(stat)}>
          <span>{stats[stat].text}</span>
          <span>{stats[stat].value}</span>
        </button>
      ))}
      {
        valueToUpdate && (
          <KeyPadModal
            values={Array(length).fill().map((x, i) => i + min)}
            handleClick={(value) => handleClick(valueToUpdate, value)}
            selected={stats[valueToUpdate].value}
          />
        )
      }
    </div>
  );
};

LevelsCard.propTypes = {
  heading: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  stats: PropTypes.objectOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
  })).isRequired,
};

export default LevelsCard;
