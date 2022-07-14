import React from 'react';
import { PropTypes } from 'prop-types';
import { meleeData, weaponSpeedActionCosts } from '../../data/melee';

import styles from './styles.module.css';

const HandToHandTable = ({ meleeList, meleeLevel }) => {
  const renderTableBody = () => (
    <tbody className={styles.body}>
      {meleeList.map((weapon) => {
        const weaponData = meleeData[weapon];
        const actionCosts = weaponSpeedActionCosts.find(
          (obj, i, a) => weaponData.ws >= obj.ws && weaponData.ws < a[i + 1].ws,
        );
        return (
          <tr key={weapon}>
            <td>{weapon}</td>
            <td>{weaponData.ws}</td>
            <td>{weaponData.wc}</td>
            <td>{meleeLevel + parseInt(weaponData.wc, 10)}</td>
            <td>{actionCosts.parry}</td>
            <td>{actionCosts.set}</td>
            <td>{actionCosts.strike}</td>
            <td>{actionCosts.rec}</td>
            <td>{weaponData.IDc}</td>
            <td>{weaponData.IDs}</td>
            <td>{weaponData.Rng}</td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th>Weapon</th>
          <th>WS</th>
          <th>WC</th>
          <th>AL</th>
          <th>Pry</th>
          <th>Set</th>
          <th>Stk</th>
          <th>Rec</th>
          <th>IDc</th>
          <th>IDs</th>
          <th>Rng</th>
        </tr>
      </thead>
      {renderTableBody()}
    </table>
  );
};

HandToHandTable.propTypes = {
  meleeList: PropTypes.arrayOf(PropTypes.string),
  meleeLevel: PropTypes.number,
};

export default HandToHandTable;
