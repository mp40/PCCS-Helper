import React, { Component } from 'react';
import { gunObjShape } from '../../helpers/proptypeShapes';
import WeaponDataRow from '../WeaponDataRow';
import { buildArrayForGunTable } from '../../helpers/componentHelpers';
import '../WeaponsCard/WeaponsCard.css';

export const standardRangeBrackets = [10, 20, 40, 70, 100, 200, 300, 400];
export const shotgunRangeBrackets = [1, 2, 4, 6, 8, 10, 15, 20, 30, 40, 80];

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
      const { gunObj } = this.props;
      const gunTableArray = buildArrayForGunTable(gunObj);
      const rangeBrackets = this.getRangeBrackets(gunObj);
      const borderBottom = '1px solid rgb(85, 83, 83)';

      return (
        <>
          <div style={{ marginTop: '0.5rem', marginLeft: '5.5%', fontWeight: 'bold' }}>{gunObj.name}</div>

          <div style={{ display: 'flex' }}>
            <table className="WeaponStatTable" style={{ border: '1px solid rgb(85, 83, 83)', borderCollapse: 'collapse' }}>

              <thead>
                <tr className="WeaponStatHeader">
                  <th style={{ width: '5rem', borderBottom }}>Data</th>
                  <th style={{ borderBottom }}>Aim Time</th>
                  <th style={{ width: '4.8rem', borderBottom }} />
                  {rangeBrackets.map(range => <th key={range} style={{ textAlign: 'center', borderBottom }}>{range}</th>)}
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
  gunObj: gunObjShape,
};

export default WeaponsCardWeaponStats;
