import React from 'react';
import { PropTypes } from 'prop-types';

import './KnockoutTable.css';

const multiplyKV = multiplier => knockoutValue => knockoutValue * multiplier;

const knockoutOdds = ['00', '10', '25', '75', '98'];
const calculatePD = [multiplyKV(0.1), multiplyKV(0.1), multiplyKV(1), multiplyKV(2), multiplyKV(3)];

const getComparisonSymbol = index => (index === 0 ? '<' : '>');

const renderRowValues = knockoutValue => knockoutOdds.map((percentage, index) => (
  <div className="kv-table-row" key={`${knockoutOdds[index]}percent`}>
    <div>{`${getComparisonSymbol(index)} ${calculatePD[index](knockoutValue)}`}</div>
    <div>{percentage}</div>
  </div>
));

const KnockoutTable = ({ knockoutValue }) => (
  <div className="kv-table">
    <div className="kv-table-heading">
        KV Table
    </div>
    <div className="kv-table-row">
      <div>PD</div>
      <div>Odds</div>
    </div>
    {renderRowValues(knockoutValue)}
  </div>
);

KnockoutTable.propTypes = {
  knockoutValue: PropTypes.number,
};

export default KnockoutTable;
