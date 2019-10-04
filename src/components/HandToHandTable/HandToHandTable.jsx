import React from 'react';
import { PropTypes } from 'prop-types';
import { meleeData, weaponSpeedActionCosts } from '../../data/melee';

import './HandToHandTable.css';

const borderLeftStyles = { borderLeft: '1px solid rgb(85, 83, 83)' };

// todo move helpers to seperate file later ?
const findWeaponData = objectKey => weaponName => meleeData().reduce(
  (str, weapObj) => (
    weaponName === weapObj.Name ? str + weapObj[objectKey] : `${str}`
  ), '');

export const findWeaponSpeed = findWeaponData('ws');
export const findWeaponClass = findWeaponData('wc');
export const findWeaponCuttingDamage = findWeaponData('IDc');
export const findWeaponStabbingDamage = findWeaponData('IDs');
export const findWeaponRange = findWeaponData('Rng');

const findActionCost = arrayIndex => weaponSpeed => weaponSpeedActionCosts().reduce(
  (acc, speedArray) => (weaponSpeed >= speedArray[0] ? speedArray[arrayIndex] : acc), 0);

export const findParryCost = findActionCost(1);
export const findSetCost = findActionCost(2);
export const findStrikeCost = findActionCost(3);
export const findRecoverCost = findActionCost(4);

const HandToHandTable = ({ meleeList, meleeLevel }) => {
  const renderTableBody = () => (
    <tbody>
      {meleeList.map((weapon, index) => (
        <tr key={weapon} className={`weapon${index}`}>
          <td className="name" style={{ textAlign: 'left' }}>{weapon}</td>
          <td className="speed" style={borderLeftStyles}>{findWeaponSpeed(weapon)}</td>
          <td className="class" style={borderLeftStyles}>{findWeaponClass(weapon)}</td>
          <td className="level" style={borderLeftStyles}>{meleeLevel + parseInt(findWeaponClass(weapon), 10)}</td>
          <td className="parry" style={borderLeftStyles}>{findParryCost(findWeaponSpeed(weapon))}</td>
          <td className="set">{findSetCost(findWeaponSpeed(weapon))}</td>
          <td className="strike">{findStrikeCost(findWeaponSpeed(weapon))}</td>
          <td className="rec">{findRecoverCost(findWeaponSpeed(weapon))}</td>
          <td className="cut" style={borderLeftStyles}>{findWeaponCuttingDamage(weapon)}</td>
          <td className="stab" style={borderLeftStyles}>{findWeaponStabbingDamage(weapon)}</td>
          <td className="rng" style={borderLeftStyles}>{findWeaponRange(weapon)}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="HandToHandTableContainerA4">
      <table className="HandToHandTable">
        <thead className="HandToHandTableHead">
          <tr>
            <th style={{ textAlign: 'left' }}>Weapon</th>
            <th style={borderLeftStyles}>WS</th>
            <th style={borderLeftStyles}>WC</th>
            <th style={borderLeftStyles}>AL</th>
            <th style={borderLeftStyles}>Pry</th>
            <th>Set</th>
            <th>Stk</th>
            <th>Rec</th>
            <th style={borderLeftStyles}>IDc</th>
            <th style={borderLeftStyles}>IDs</th>
            <th style={borderLeftStyles}>Rng</th>
          </tr>
        </thead>
        {renderTableBody()}
      </table>
    </div>
  );
};

HandToHandTable.propTypes = {
  meleeList: PropTypes.arrayOf(PropTypes.string),
  meleeLevel: PropTypes.number,
};

export default HandToHandTable;
