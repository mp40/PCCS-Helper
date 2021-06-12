import React from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import PhysicalData from './PhysicalData';
import AimTimes from './AimTimes';

import { gunObjShape, launcherShape } from '../../helpers/proptypeShapes';

import emptyFirearm from './emptyFirearm';
import { getEmptyRow, getWeaponCharacteristics, getTemplate, keys } from './data';

import './WeaponStatsTable.css';
import './WeaponStatsTableA4.css';

const { table1cSAL } = require('../../data/tablesCreateCharacter');

export const findSkillLevelFromSAL = (playerSAL) => {
  const result = table1cSAL.findIndex((salValue) => salValue === playerSAL);
  return result === -1 ? undefined : result;
};

const WeaponStatsTable = ({ weapon, sal, size }) => {
  const dataTemplate = getTemplate(weapon.list, weapon.trb, weapon.projectiles.length);
  const emptyRow = getEmptyRow(weapon.list);

  const renderData = (arr) => arr.map((value, dex) => (
    <td key={keys[dex]}>{value }</td>
  ));

  const getData = (index) => {
    const data = dataTemplate[index];
    const projectileData = weapon.projectiles?.[data.index]?.[data.valueKey];
    const ballasticsData = weapon?.[data.valueKey];
    const isPenData = data.valueKey === 'pen';
    const isLauncherProjectile = data?.laucherProjectile === true && weapon.projectiles.length > data.index;
    const isLauncherExplosive = data?.explosiveData === true && weapon.projectiles.length > data.index;

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
    <div className={`WeaponStatsContainer ${size} ${weapon.list}`}>
      <table className={size ? `${size}WeaponStatTable` : 'WeaponStatTable'}>
        <TableHead weaponList={weapon.list} />
        <tbody>
          {getWeaponCharacteristics(weapon.list).map((value, index) => (
            <tr key={keys[index]} className="gunTableLine">
              <PhysicalData weapon={weapon} value={value} />
              <AimTimes
                aim={weapon.aim}
                index={index}
                sal={sal}
                optic={weapon?.optics?.attached}
                launcher={weapon?.launcher?.attached}
              />
              {getData(index)}
            </tr>
          ))}
        </tbody>
      </table>
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
