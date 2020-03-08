import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

import emptyFirearm from './emptyFirearm';
import { weaponCharacteristics, getTemplate, keys } from './data';

import './FirearmStatsTable.css';
import './FirearmStatsTableA4.css';

const { table1cSAL } = require('../../data/tablesCreateCharacter');

export const standardRangeBrackets = [10, 20, 40, 70, 100, 200, 300, 400];
export const shotgunRangeBrackets = [1, 2, 4, 6, 8, 10, 15, 20, 30, 40, 80];

export const findSkillLevelFromSAL = (playerSAL) => {
  const result = table1cSAL.findIndex((salValue) => salValue === playerSAL);
  return result === -1 ? undefined : result;
};

const getFirearmNameAndRecoil = (gunObj, skillLevel) => {
  if (skillLevel === undefined) {
    return gunObj.name;
  }
  return `${gunObj.name} - recoil recovery: ${getRecoilRecoveryValue(gunObj.kd, skillLevel)}`;
};

const FirearmStatsTable = ({ gunObj, sal, size }) => {
  const rangeBrackets = gunObj.list === 'shotguns' ? shotgunRangeBrackets : standardRangeBrackets;
  const dataTemplate = getTemplate(gunObj.list === 'shotguns', gunObj.trb, gunObj.projectiles.length);
  const emptyRow = new Array(rangeBrackets.length + 2).fill('');
  const tableHeadings = ['Data', 'Aim Time', '', '', ...rangeBrackets];

  const parseStatValue = (value) => String(value).substring(1);

  const parseProjectilePenValue = (value) => (value === 1 ? '1.0' : value);

  const getStatValue = (value, mag) => {
    const returnValue = mag ? gunObj.mag[0][value] : gunObj[value];
    return returnValue < 1 ? parseStatValue(returnValue) : returnValue;
  };

  const getData = (index) => {
    const data = dataTemplate[index];
    const projectileData = gunObj.projectiles?.[data.index]?.[data.valueKey];
    const ballasticsData = gunObj?.[data.valueKey];
    const isPenData = data.valueKey === 'pen';

    const renderData = (arr) => (arr.map((value, dex) => (
      <td key={keys[dex]}>{isPenData ? parseProjectilePenValue(value) : value }</td>
    )));

    if (projectileData) {
      return renderData(
        isPenData
          ? [gunObj.projectiles[data.index].type, ...data.prefix, ...projectileData]
          : [...data.prefix, ...projectileData],
      );
    }

    if (ballasticsData) {
      return renderData([...data.prefix, ...ballasticsData]);
    }

    return renderData(emptyRow);
  };

  return (
    <div className={`WeaponStatsContainer ${size}`}>
      <div>{`${getFirearmNameAndRecoil(gunObj, findSkillLevelFromSAL(sal))}`}</div>
      <div>
        <table className={size ? `${size}WeaponStatTable` : 'WeaponStatTable'}>
          <thead>
            <tr className="WeaponStatHeader">
              {tableHeadings.map((value, index) => (
                <th key={keys[index]}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weaponCharacteristics.map((value, index) => (
              <tr key={keys[index]} className={`gunTableLine gunTableLine${index + 1}`}>
                <td>
                  <span>{value.abbreviation}</span>
                  <span>{getStatValue(value.data, value.mag)}</span>
                </td>
                <td>
                  <span>{gunObj.aim.ac[index]}</span>
                  <span>
                    {index < gunObj.aim.mod.length && sal
                      ? gunObj.aim.mod[index] + sal
                      : gunObj.aim.mod[index]}

                  </span>
                </td>
                {getData(index)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

FirearmStatsTable.propTypes = {
  size: PropTypes.string,
  gunObj: gunObjShape,
  sal: PropTypes.number,
};

FirearmStatsTable.defaultProps = {
  gunObj: emptyFirearm(),
};

export default FirearmStatsTable;
