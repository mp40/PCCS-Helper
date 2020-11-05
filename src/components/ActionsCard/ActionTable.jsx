import React from 'react';
import PropTypes from 'prop-types';

import './ActionTable.css';

const { actionsPerImpulse } = require('../../helpers/helperFunctions');

const headings = ['Imp', '1', '2', '3', '4'];

const actionsRow = (heading, actionArray) => (
  <>
    <tr className="actionsTable">
      {[heading, actionArray[0], actionArray[1], actionArray[2], actionArray[3]].map((value, dex) => (
        <td key={headings[dex]}>{value}</td>
      ))}
    </tr>
  </>
);

const ActionTable = ({ gunCombatActions, handCombatActions, className }) => (
  <table className={`combatActions ${className}`}>
    <thead>
      <tr className="actionsHeader">
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

ActionTable.propTypes = {
  gunCombatActions: PropTypes.number.isRequired,
  handCombatActions: PropTypes.number.isRequired,
  className: PropTypes.string,
};

ActionTable.defaultProps = {
  className: 'default',
};

export default ActionTable;
