import React from 'react';
import PropTypes from 'prop-types';

const { actionsPerImpulse } = require('../../helpers/helperFunctions');

const actionsRow = (idRef, heading, actionArray) => (
  <>
    <tr id={idRef} className="actionsTable">
      <td className="actionType">{heading}</td>
      <td className="actions">{actionArray[0]}</td>
      <td className="actions">{actionArray[1]}</td>
      <td className="actions">{actionArray[2]}</td>
      <td className="actions">{actionArray[3]}</td>
    </tr>
  </>
);

const ActionTable = ({ combatActions }) => {
  const gunActions = actionsPerImpulse(combatActions[0]);
  const handActions = actionsPerImpulse(combatActions[1]);
  return (
    <table style={{ width: '100%' }} className="combatActions">
      <thead>
        <tr className="actionsHeader">
          <th className="actionType" style={{ width: '32%' }}> Imp</th>
          <th style={{ width: '17%' }}>1</th>
          <th style={{ width: '17%' }}>2</th>
          <th style={{ width: '17%' }}>3</th>
          <th style={{ width: '17%' }}>4</th>
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
};

export default ActionTable;
