import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeaponDataRow from './WeaponDataRow';
import ButtonDeleteX from './buttons/ButtonDeleteX';

import { buildArrayForGunTable } from '../helpers/componentHelpers';

import './WeaponsCard.css';
import WeaponsCardModifyWeapon from './WeaponsCardModifyFirearm';

class WeaponsCardWeaponStats extends Component {
    getRangeBrackets = (gunObj) => {
      const standard = [10, 20, 40, 70, 100, 200, 300, 400];
      const shotgun = [1, 2, 4, 6, 8, 10, 15, 20, 30, 40, 80];
      if (!gunObj.projectiles[1]) {
        return standard;
      }
      return gunObj.projectiles[1].type.includes('Shot') ? shotgun : standard;
    }

    render() {
      const { gunObj,
        handleShowGunStats,
        modifyFirearm,
        createCustomMag,
        modifyFirearmWeight,
        handleModifyFirearm,
        toggleCreateCustomMag,
        handleAddCustomMag,
        toggleModifyFirearmWeight,
        handleModifyFirearmWeight,
        removeAllGunMods } = this.props;
      const gunTableArray = buildArrayForGunTable(gunObj);
      const rangeBrackets = this.getRangeBrackets(gunObj);
      const borderBottom = '1px solid rgb(85, 83, 83)';

      return (
        <div className="WeaponStatTableContainer" style={{ fontSize: 'medium' }}>
          <div style={{ marginTop: '2px', marginLeft: '2px' }}>
            <ButtonDeleteX
              id="closeGunStatView"
              onClick={handleShowGunStats}
            />
          </div>

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

            {modifyFirearm
              ? (
                <WeaponsCardModifyWeapon
                  gunObj={gunObj}
                  createCustomMag={createCustomMag}
                  modifyFirearmWeight={modifyFirearmWeight}
                  handleModifyFirearm={handleModifyFirearm}
                  toggleCreateCustomMag={toggleCreateCustomMag}
                  handleAddCustomMag={handleAddCustomMag}
                  toggleModifyFirearmWeight={toggleModifyFirearmWeight}
                  handleModifyFirearmWeight={handleModifyFirearmWeight}
                  removeAllGunMods={removeAllGunMods}
                />
              )
              : null}
          </div>
        </div>
      );
    }
}

WeaponsCardWeaponStats.propTypes = {
  removeAllGunMods: PropTypes.func,
  toggleModifyFirearmWeight: PropTypes.func,
  handleModifyFirearmWeight: PropTypes.func,
  handleAddCustomMag: PropTypes.func,
  toggleCreateCustomMag: PropTypes.func,
  createCustomMag: PropTypes.bool,
  modifyFirearmWeight: PropTypes.bool,
  handleModifyFirearm: PropTypes.func,
  modifyFirearm: PropTypes.bool,
  handleShowGunStats: PropTypes.func,
  gunObj: PropTypes.shape({
    name: PropTypes.string,
    list: PropTypes.string,
    type: PropTypes.array,
    length: PropTypes.number,
    weight: PropTypes.number,
    rt: PropTypes.number,
    rof: PropTypes.string,
    mag: PropTypes.array,
    kd: PropTypes.number,
    sab: PropTypes.number,
    aim: PropTypes.object,
    projectiles: PropTypes.array,
    ma: PropTypes.array,
    ba: PropTypes.array,
    tof: PropTypes.array,
    offical: PropTypes.bool,
  }),
};

export default WeaponsCardWeaponStats;
