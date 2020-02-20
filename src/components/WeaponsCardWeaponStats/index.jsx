import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import WeaponDataRow from '../WeaponDataRow';
import { buildArrayForGunTable } from '../../helpers/componentHelpers';
import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

import emptyFirearm from './emptyFirearm';

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

const getNameStyle = (size) => {
  if (size === 'a4') {
    return { marginTop: '0.5cm', marginLeft: '.1cm', fontWeight: 'bold', fontSize: '12pt', textAlign: 'left' };
  }
  return { marginTop: '0.5rem', marginLeft: '5.5%', fontWeight: 'bold' };
};

const WeaponsCardWeaponStats = ({ gunObj, sal, size }) => {
  const getRangeBrackets = () => {
    const standard = standardRangeBrackets;
    const shotgun = shotgunRangeBrackets;
    if (!gunObj.projectiles[1]) {
      return standard;
    }
    return gunObj.projectiles[1].type.includes('Shot') ? shotgun : standard;
  };

  return (
    <div>
      <div style={getNameStyle(size)}>{`${getFirearmNameAndRecoil(gunObj, findSkillLevelFromSAL(sal))}`}</div>
      <div style={{ display: 'flex' }}>
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
            {buildArrayForGunTable(gunObj).map((tableLine, index) => (
              <WeaponDataRow
                key={index}
                tableLine={tableLine}
                sal={sal}
                index={index}
              />
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
