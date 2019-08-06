import React from 'react';
import { PropTypes } from 'prop-types';


const renderHeading = () => (
  <thead>
    <tr>
      <th />
      <th />
      <th />
      <th>C</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>5</th>
      <th>10</th>
    </tr>
  </thead>
);

const createNestedArray = (grenade) => {
  const dataKeys = Object.keys(grenade).slice(2, 7);
  return dataKeys.map(value => [value.toUpperCase()]);
};

export const prepareDataForRender = (grenade) => {
  const dataForRender = createNestedArray(grenade);
  const dataValues = Object.values(grenade).slice(2, 7);
  const explosiveDataHeadings = Object.keys(grenade.data).map(value => value.toUpperCase());
  const explosiveDataStats = Object.values(grenade.data);
  return dataForRender.map((row, index) => {
    const explosiveStats = index === 4 ? [] : explosiveDataStats[index];
    return [...row, dataValues[index], explosiveDataHeadings[index], explosiveStats];
  });
};

const tableRowClassNames = ['grenadeDataRowOne', 'grenadeDataRowTwo', 'grenadeDataRowThree', 'grenadeDataRowFour', 'grenadeDataRowFive'];

const renderBody = dataForRender => (
  <tbody>
    {dataForRender.map((row, index) => (
      <tr className={tableRowClassNames[index]} key={tableRowClassNames[index]}>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td>{row[2]}</td>
        {row[3].map((value, dex) => (
          // eslint-disable-next-line react/no-array-index-key
          <td key={dex}>{value}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

const GrenadeData = ({ grenade }) => (
  <table>
    {renderHeading()}
    {renderBody(prepareDataForRender(grenade))}
  </table>
);

GrenadeData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  grenade: PropTypes.object,
};

export default GrenadeData;
