import React from 'react';
import { PropTypes } from 'prop-types';
import { meleeData } from '../../data/melee';
// move helpers to seperate file later
export const findWeaponSpeed = weaponName => meleeData().reduce((str, weapObj) => (weaponName === weapObj.Name ? str + weapObj.ws : `${str}`), '');
export const findWeaponClass = weaponName => meleeData().reduce((str, weapObj) => (weaponName === weapObj.Name ? str + weapObj.wc : `${str}`), '');
export const findWeaponCuttingDamage = weaponName => meleeData().reduce((str, weapObj) => (weaponName === weapObj.Name ? str + weapObj.IDc : `${str}`), '');
export const findWeaponStabbingDamage = weaponName => meleeData().reduce((str, weapObj) => (weaponName === weapObj.Name ? str + weapObj.IDs : `${str}`), '');
export const findWeaponRange = weaponName => meleeData().reduce((str, weapObj) => (weaponName === weapObj.Name ? str + weapObj.Rng : `${str}`), '');

const HandToHandTable = ({ meleeList, meleeLevel }) => {
  const hold = () => {
    // console.log('>>>', meleeLevel);
  };
  return (
    <div className="HandToHandTableContainer">
      <table>
        <thead>
          <tr>
            <th>Weapon</th>
            <th className="WeaponSpeed">WS</th>
            <th>WC</th>
            <th>AL</th>
            <th>Parry</th>
            <th>Set</th>
            <th>Strike</th>
            <th>Rec</th>
            <th>IDc</th>
            <th>IDs</th>
            <th>Rng</th>
          </tr>
        </thead>
        <tr className="weapon0">
          <td className="name">{meleeList[0]}</td>
          <td className="speed">{findWeaponSpeed(meleeList[0])}</td>
          <td className="class">{findWeaponClass(meleeList[0])}</td>
          <td className="level">{meleeLevel + parseInt(findWeaponClass(meleeList[0]), 10)}</td>
          <td className="parry">{}</td>
        </tr>
      </table>
    </div>
  );
};

HandToHandTable.propTypes = {
  meleeList: PropTypes.arrayOf(PropTypes.string),
  meleeLevel: PropTypes.number,
};

export default HandToHandTable;
