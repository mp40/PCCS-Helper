import React from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

import emptyFirearm from './emptyFirearm';
import { weaponCharacteristics, getTemplate } from './data';

import '../WeaponsCard/WeaponsCard.css';
import './styles.css';

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
  const rangeBrackets = gunObj.list === 'shotguns' ? shotgunRangeBrackets : standardRangeBrackets;
  const dataTemplate = getTemplate(gunObj.list === 'shotguns', gunObj.trb !== null, gunObj.projectiles.length);
  const emptyRow = new Array(rangeBrackets.length + 1).fill('');

  const getData = (index) => {
    const data = dataTemplate[index];
    const projectileData = gunObj.projectiles?.[data.index]?.[data.valueKey];
    const ballasticsData = gunObj?.[data.valueKey];

    // const renderData = (nestedArray) => (
    //   <>
    //     <td>
    //       {nestedArray[0].map((value) => (
    //         <span>{value}</span>
    //       ))}
    //     </td>
    //     {nestedArray[1].map((value) => (
    //       <td>{value}</td>
    //     ))}
    //   </>
    // );

    if (projectileData) {
      // renderData(projectileData);
      return (
        <>
          <td>
            {projectileData[0].map((value) => (
              <span>{value}</span>
            ))}
          </td>
          {projectileData[1].map((value) => (
            <td>{value}</td>
          ))}
        </>
      );
    }

    if (ballasticsData) {
      // renderData(ballasticsData);
      return (
        <>
          <td>
            {ballasticsData[0].map((value) => (
              <span>{value}</span>
            ))}
          </td>
          {ballasticsData[1].map((value) => (
            <td>{value}</td>
          ))}
        </>
      );
    }

    return (
      emptyRow.map((value) => (
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
              {rangeBrackets.map((range) => <th key={range}>{range}</th>)}
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
                {getData(index)}
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
