import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const { actionsPerImpulse } = require('../../helpers/helperFunctions');

const headings = ['Imp', '1', '2', '3', '4'];

const actionsRow = (heading, actionArray) => (
  <>
    <tr>
      {[heading, actionArray[0], actionArray[1], actionArray[2], actionArray[3]].map((value, dex) => (
        <td key={headings[dex]}>{value}</td>
      ))}
    </tr>
  </>
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
        {actionsRow('Gun', actionsPerImpulse(gunCombatActions))}
        {actionsRow('Hand', actionsPerImpulse(handCombatActions))}
      </tbody>
    </table>
);

ActionsTable.propTypes = {
  gunCombatActions: PropTypes.number.isRequired,
  handCombatActions: PropTypes.number.isRequired,
};

export default ActionsTable;
