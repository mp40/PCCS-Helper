import React from 'react';
import { PropTypes } from 'prop-types';
import { renderStandardGrenade, renderWilliePete } from './SubComponents';

import '../GrenadeSelectModal/GrenadeSelectModal.css';

const standardRangeBrackets = ['', '', '', 'C', '0', '1', '2', '3', '5', '10'];
const williePeteRangeBrackets = ['', '', '', 'C', '0', '1', '2', '3', '4', '5', '6', '8'];
// const seeRules = ['See Rules - Special Weapons Suppliment 10208'];

const getRangeBrackets = (grenadeName) => {
  if (grenadeName === 'M15 WP') {
    return williePeteRangeBrackets;
  }
  if (grenadeName === 'Smoke') {
    return ['', '', 'See ', 'Rules', '-', 'Book', '10208', '', '', ''];
  }
  return standardRangeBrackets;
};

const getLengthOfTable = previousRow => (previousRow ? previousRow.length : 7);

const renderHeading = (grenade) => {
  const rangeBrackets = getRangeBrackets(grenade.name);
  return (
    <thead className="grenadeTableHeader">
      <tr>
        {rangeBrackets.map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <th key={index} style={{ width: '4ch' }}>{value}</th>
        ))}
      </tr>
    </thead>
  );
};

const createNestedArray = (grenade) => {
  const dataKeys = Object.keys(grenade).slice(2, -1);
  return dataKeys.map((value) => {
    if (value.length > 2) {
      return [`${value.charAt(0).toUpperCase()}${value.slice(1)}`];
    }
    return [value.toUpperCase()];
  });
};


const createDataHeadings = (grenade) => {
  if (grenade.name === 'M15 WP') {
    return ['BWPHC', 'PD Body', 'PD Limb', 'PDs TS 0', 'PDs TS 4', 'PDs TS 7'];
  }
  if (grenade.name === 'Smoke') {
    return [];
  }
  return Object.keys(grenade.data).map(value => value.toUpperCase());
};

export const prepareDataForRender = (grenade) => {
  const dataForRender = createNestedArray(grenade);
  const dataValues = Object.values(grenade).slice(2, -1);
  const explosiveDataHeadings = createDataHeadings(grenade);
  const explosiveDataStats = grenade.data ? Object.values(grenade.data) : [];
  return dataForRender.map((row, index) => {
    const explosiveStats = explosiveDataStats[index] ? explosiveDataStats[index] : new Array(getLengthOfTable(explosiveDataStats[index - 1])).fill('');
    return [...row, dataValues[index], explosiveDataHeadings[index], explosiveStats];
  });
};

const renderBody = (dataForRender) => {
  if (dataForRender[0][2] === 'BWPHC') {
    return renderWilliePete(dataForRender);
  }
  return renderStandardGrenade(dataForRender);
};

const GrenadeData = ({ grenade }) => (
  <div>
    <div className="grenadeName">{grenade.name}</div>
    <table className="grenadeTable">
      {renderHeading(grenade)}
      {renderBody(prepareDataForRender(grenade))}
    </table>
  </div>
);

GrenadeData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  grenade: PropTypes.object,
};

export default GrenadeData;
