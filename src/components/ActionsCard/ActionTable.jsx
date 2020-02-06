import React from 'react';
import PropTypes from 'prop-types';

import './ActionTable.css';

const { actionsPerImpulse } = require('../../helpers/helperFunctions');

const actionsRow = (idRef, heading, actionArray) => (
  <>
    <tr id={idRef} className="actionsTable">
      <td>{heading}</td>
      <td>{actionArray[0]}</td>
      <td>{actionArray[1]}</td>
      <td>{actionArray[2]}</td>
      <td>{actionArray[3]}</td>
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
          <th className="actionType">Imp</th>
          <th className="impluseTH">1</th>
          <th className="impluseTH">2</th>
          <th className="impluseTH">3</th>
          <th className="impluseTH">4</th>
        </tr>
      </thead>
      <tbody>
        {actionsRow('gunActionTable', 'Gun', gunActions)}
        {actionsRow('handActionTable', 'Hand', handActions)}
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
