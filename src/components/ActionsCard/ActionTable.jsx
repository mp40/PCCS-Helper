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

const ActionTable = ({ combatActions, className }) => {
  const gunActions = actionsPerImpulse(combatActions[0]);
  const handActions = actionsPerImpulse(combatActions[1]);
  return (
    <table className={`combatActions ${className}`}>
      <thead>
        <tr className="actionsHeader">
          {headings.map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {actionsRow('Gun', gunActions)}
        {actionsRow('Hand', handActions)}
      </tbody>
    </table>
  );
};

ActionTable.propTypes = {
  combatActions: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
};

ActionTable.defaultProps = {
  className: 'default',
};

export default ActionTable;
