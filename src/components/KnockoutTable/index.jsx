import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.module.css';

const multiplyKV = (multiplier) => (knockoutValue) => knockoutValue * multiplier;

const knockoutOdds = ['00', '10', '25', '75', '98'];
const calculatePD = [multiplyKV(0.1), multiplyKV(0.1), multiplyKV(1), multiplyKV(2), multiplyKV(3)];

const getComparisonSymbol = (index) => (index === 0 ? '<' : '>');

const renderRowValues = (knockoutValue) => knockoutOdds.map((percentage, index) => (
  <div key={`${knockoutOdds[index]}percent`}>
    <span>{`${getComparisonSymbol(index)} ${calculatePD[index](knockoutValue)}`}</span>
    <span>{percentage}</span>
  </div>
));

const KnockoutTable = ({ knockoutValue }) => (
  <div className={styles.wrapper}>
    <span>
      KV Table
    </span>
    <div>
      <span>PD</span>
      <span>Odds</span>
    </div>
    {renderRowValues(knockoutValue)}
  </div>
);

KnockoutTable.propTypes = {
  knockoutValue: PropTypes.number,
};

export default KnockoutTable;
