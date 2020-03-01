import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import WeaponDataRow from '../WeaponDataRow';
import { buildArrayForGunTable } from '../../helpers/componentHelpers';
import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

import emptyFirearm from './emptyFirearm';
import { weaponCharacteristics, defaultTemplate } from './data';

import '../WeaponsCard/WeaponsCard.css';

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

const WeaponsCardWeaponStats = ({ gunObj, sal, size }) => {
  const getRangeBrackets = () => {
    return gunObj.list === 'shotguns' ? shotgunRangeBrackets : standardRangeBrackets;
  };

  const getProjectileKeys = (index) => {
    const data = defaultTemplate[index];
    if (typeof data !== 'object') {
      return '';
    }
    if (!gunObj.projectiles[data.index]) {
      return '';
    }
    return (
      <>
        <span>{gunObj.projectiles[data.index][data.typeKey]}</span>
        <span>{data.valueKey.toUpperCase()}</span>
      </>
    );
  };

  const getProjectileData = (index) => {
    const data = defaultTemplate[index];
    const emptyRow = new Array(8).fill('');
    if (typeof data === 'object' && gunObj.projectiles[data.index]) {
      return (
        gunObj.projectiles[data.index][data.valueKey].map((value) => (
          <td>{value}</td>
        ))
      );
    }
    if (gunObj[data] === undefined || gunObj[data] === null) {
      return (
        emptyRow.map((value) => (
          <td>{value}</td>
        ))
      );
    }
    return (
      gunObj[data].map((value) => (
        <td>{value}</td>
      ))
    );
  };

  return (
    <div className={`WeaponStatsContainer ${size}`}>
      <div>{`${getFirearmNameAndRecoil(gunObj, findSkillLevelFromSAL(sal))}`}</div>
      <div>
        <table className={size ? `${size}WeaponStatTable` : 'WeaponStatTable'}>
          <thead>
            <tr className="WeaponStatHeader">
              <th className="dataCol">Data</th>
              <th className="dataCol">Aim Time</th>
              <th className="dataCol">{' '}</th>
              {getRangeBrackets(gunObj).map((range) => <th key={range}>{range}</th>)}
            </tr>
          </thead>
          <tbody>
            {weaponCharacteristics.map((value, index) => (
              <tr>
                <td>
                  <span>{value.abbreviation}</span>
                  <span>{gunObj[value.data]}</span>
                </td>
                <td>
                  <span>{gunObj.aim.ac[index]}</span>
                  <span>{gunObj.aim.mod[index]}</span>
                </td>
                <td>
                  {getProjectileKeys(index)}
                </td>
                {getProjectileData(index)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WeaponsCardWeaponStats.propTypes = {
  size: PropTypes.string,
  gunObj: gunObjShape,
  sal: PropTypes.number,
};

WeaponsCardWeaponStats.defaultProps = {
  gunObj: emptyFirearm(),
};

export default WeaponsCardWeaponStats;
