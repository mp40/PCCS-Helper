import React from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';

import { gunObjShape, launcherShape } from '../../helpers/proptypeShapes';
import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

import emptyFirearm from './emptyFirearm';
import { getRangeBrackets, getWeaponCharacteristics, getTemplate, keys } from './data';

import './WeaponStatsTable.css';
import './WeaponStatsTableA4.css';

const { table1cSAL } = require('../../data/tablesCreateCharacter');

export const findSkillLevelFromSAL = (playerSAL) => {
  const result = table1cSAL.findIndex((salValue) => salValue === playerSAL);
  return result === -1 ? undefined : result;
};

const getFirearmNameAndRecoil = (weapon, skillLevel) => {
  if (skillLevel === undefined) {
    return weapon.name;
  }
  return `${weapon.name} - recoil recovery: ${getRecoilRecoveryValue(weapon.kd, skillLevel)}`;
};

const WeaponStatsTable = ({ weapon, sal, size }) => {
  const rangeBrackets = getRangeBrackets(weapon.list); // mptodo this is tied to emptyrow generation
  const dataTemplate = getTemplate(weapon.list === 'launchers', weapon.list === 'shotguns', weapon.trb, weapon.projectiles.length);
  const emptyRow = new Array(rangeBrackets.length + 2).fill('');

  const parseStatValue = (value) => String(value).substring(1);

  const parseProjectilePenValue = (value) => (value === 1 ? '1.0' : value);

  const getStatValue = (value, mag) => {
    const returnValue = mag ? weapon.mag[0][value] : weapon[value];
    return returnValue < 1 ? parseStatValue(returnValue) : returnValue;
  };

  const getData = (index) => {
    const data = dataTemplate[index];
    const projectileData = weapon.projectiles?.[data.index]?.[data.valueKey];
    const ballasticsData = weapon?.[data.valueKey];
    const isPenData = data.valueKey === 'pen';
    const isLauncherProjectile = data?.laucherProjectile === true && weapon.projectiles.length > data.index;
    const isLauncherExplosive = data?.explosiveData === true && weapon.projectiles.length > data.index;

    const renderData = (arr) => (arr.map((value, dex) => (
      <td key={keys[dex]}>{isPenData ? parseProjectilePenValue(value) : value }</td>
    )));

    if (isLauncherProjectile) {
      return renderData(
        [
          ...data.prefix,
          ...projectileData,
          data.valueKey.toUpperCase(),
          ...weapon.explosive[data.index][data.valueKey],
        ],
      );
    }

    if (isLauncherExplosive) {
      return renderData(
        [...data.prefix, data.valueKey.toUpperCase(), ...weapon.explosive[data.index][data.valueKey]],
      );
    }

    if (projectileData) {
      return renderData(
        isPenData
          ? [weapon.projectiles[data.index].type, ...data.prefix, ...projectileData]
          : [...data.prefix, ...projectileData],
      );
    }

    if (ballasticsData) {
      return renderData([...data.prefix, ...ballasticsData, ...data.suffix]);
    }

    return renderData(emptyRow);
  };

  return (
    <div className={`WeaponStatsContainer ${size}`}>
      <div>{`${getFirearmNameAndRecoil(weapon, findSkillLevelFromSAL(sal))}`}</div>
      <div>
        <table className={size ? `${size}WeaponStatTable` : 'WeaponStatTable'}>
          <TableHead weaponList={weapon.list} />
          <tbody>
            {getWeaponCharacteristics(weapon.list).map((value, index) => (
              <tr key={keys[index]} className={`gunTableLine gunTableLine${index + 1}`}>
                <td>
                  <span>{value.abbreviation}</span>
                  <span>{getStatValue(value.data, value.mag)}</span>
                </td>
                <td>
                  <span>{weapon.aim.ac[index]}</span>
                  <span>
                    {index < weapon.aim.mod.length && sal
                      ? weapon.aim.mod[index] + sal
                      : weapon.aim.mod[index]}

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

WeaponStatsTable.propTypes = {
  size: PropTypes.string,
  weapon: PropTypes.oneOfType([gunObjShape, launcherShape]),
  sal: PropTypes.number,
};

WeaponStatsTable.defaultProps = {
  weapon: emptyFirearm(),
};

export default WeaponStatsTable;
