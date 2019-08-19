import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gunObjShape } from '../../helpers/proptypeShapes';
import WeaponDataRow from '../WeaponDataRow';
import { buildArrayForGunTable } from '../../helpers/componentHelpers';
import '../WeaponsCard/WeaponsCard.css';

export const standardRangeBrackets = [10, 20, 40, 70, 100, 200, 300, 400];
export const shotgunRangeBrackets = [1, 2, 4, 6, 8, 10, 15, 20, 30, 40, 80];

const applyModsToAimTime = (gunObj, sal = 0) => {
  const updatedAim = gunObj.aim.mod.map(value => value + sal);
  const newFirearm = gunObj;
  newFirearm.aim.mod = updatedAim;
  return newFirearm;
};

const getNameStyle = (size) => {
  if (size === 'a4') {
    return { marginTop: '0.5cm', marginLeft: '.1cm', fontWeight: 'bold', fontSize: '12pt', textAlign: 'left' };
  }
  return { marginTop: '0.5rem', marginLeft: '5.5%', fontWeight: 'bold' };
};

class WeaponsCardWeaponStats extends Component {
    getRangeBrackets = (gunObj) => {
      const standard = standardRangeBrackets;
      const shotgun = shotgunRangeBrackets;
      if (!gunObj.projectiles[1]) {
        return standard;
      }
      return gunObj.projectiles[1].type.includes('Shot') ? shotgun : standard;
    }

    render() {
      const { gunObj, sal, size } = this.props;
      const gunTableArray = buildArrayForGunTable(applyModsToAimTime(gunObj, sal));
      const rangeBrackets = this.getRangeBrackets(gunObj);
      const WeaponStatTable = size ? `${size}WeaponStatTable` : 'WeaponStatTable';

      return (
        <>
          <div style={getNameStyle(size)}>{gunObj.name}</div>

          <div style={{ display: 'flex' }}>
            <table className={WeaponStatTable}>

              <thead>
                <tr className="WeaponStatHeader">
                  <th className="dataCol">Data</th>
                  <th className="dataCol">Aim Time</th>
                  <th className="dataCol" />
                  {rangeBrackets.map(range => <th key={range}>{range}</th>)}
                </tr>
              </thead>

              <tbody>

                {gunTableArray.map((tableLine, index) => (
                  <WeaponDataRow
                    key={index}
                    tableLine={tableLine}
                    index={index}
                  />
                ))}

              </tbody>

            </table>

          </div>
        </>
      );
    }
}

WeaponsCardWeaponStats.propTypes = {
  size: PropTypes.string,
  gunObj: gunObjShape,
  sal: PropTypes.number,
};

export default WeaponsCardWeaponStats;
