import React from 'react';
import PropTypes from 'prop-types';

import { actionsPerImpulseTable } from '../../core/tables';

import styles from './styles.module.css';

const headings = ['Imp', '1', '2', '3', '4'];

const actionsRow = (heading, actionArray) => (
  <tr>
    {[heading, actionArray[0], actionArray[1], actionArray[2], actionArray[3]].map((value, dex) => (
      <td key={headings[dex]}>{value}</td>
    ))}
  </tr>
);

const ActionsTable = (
  {
    gunCombatActions,
    handCombatActions,
  }) => (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          {headings.map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {actionsRow('Gun', actionsPerImpulseTable[gunCombatActions])}
        {actionsRow('Hand', actionsPerImpulseTable[handCombatActions])}
      </tbody>
    </table>
);

ActionsTable.propTypes = {
  gunCombatActions: PropTypes.number.isRequired,
  handCombatActions: PropTypes.number.isRequired,
};

export default ActionsTable;
