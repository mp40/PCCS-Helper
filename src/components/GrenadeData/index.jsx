import React from 'react';
import { grenadeShape } from '../../helpers/proptypeShapes';

import { stats, effects, effectsSpecial, text, tableHeadings, keys } from './data';

import './GrenadeData.css';

const renderHeading = (grenade, isWilliePete) => (
  <thead className={`grenadeTableHeader${isWilliePete ? ' williePeterHeader' : ''}`}>
    <tr>
      {tableHeadings[grenade.heading].map((value, index) => (
        <th key={keys[index]}>{value}</th>
      ))}
    </tr>
  </thead>
);

const renderEffectData = (length, array = new Array(length).fill(' ')) => {
  return array.map((value, index) => (
    <td key={keys[index]}>{value}</td>
  ));
};

const GrenadeData = ({ grenade }) => {
  const isWilliePete = grenade.name === 'M15 WP';
  const effectsArray = isWilliePete ? effectsSpecial : effects;
  const effectsArrayLength = isWilliePete ? 10 : 8;
  return (
    <div>
      <div className="grenadeName">{grenade.name}</div>
      <table className="grenadeTable">
        {renderHeading(grenade, isWilliePete)}
        <tbody className={`grenadeTableBody${isWilliePete ? ' williePeteBody' : ''}`}>
          {stats.map((value, index) => {
            if (grenade[value]) {
              return (
                <tr key={value}>
                  <td>{text[value]}</td>
                  <td>{grenade[value]}</td>
                  {renderEffectData(effectsArrayLength, grenade.data[effectsArray[index]])}
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

GrenadeData.propTypes = {
  grenade: grenadeShape,
};

export default GrenadeData;
