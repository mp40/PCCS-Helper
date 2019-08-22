import React from 'react';
import { connect } from 'react-redux';
import { combatStatsShape } from '../../helpers/proptypeShapes';

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

const ActionsCard = ({ combatStats }) => {
  const gunActions = actionsPerImpulse(combatStats.combatActions[0]);
  const handActions = actionsPerImpulse(combatStats.combatActions[1]);
  return (
    <div>
      <div className="combatDataContainer">

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

        <table className="additionalCombatData">
          <tbody>
            <tr>
              <td style={{ width: '33.33%' }}>
                {`BS ${combatStats.baseSpeed}`}
              </td>
              <td style={{ width: '33.33%' }}>
                {`MS ${combatStats.maxSpeed}`}
              </td>
              <td style={{ width: '33.33%' }}>
                {`DB ${combatStats.damageBonus}`}
              </td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>
  );
};

ActionsCard.propTypes = {
  combatStats: combatStatsShape.isRequired,
};

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
  characterStats: {
    str: state.characterStats.str,
    int: state.characterStats.int,
    wil: state.characterStats.wil,
    hlt: state.characterStats.hlt,
    agi: state.characterStats.agi,
    gunLevel: state.characterStats.gunLevel,
    handLevel: state.characterStats.handLevel,
  },
  combatStats: {
    baseSpeed: state.combatStats.baseSpeed,
    maxSpeed: state.combatStats.maxSpeed,
    SAL: state.combatStats.SAL,
    CE: state.combatStats.CE,
    ISF: state.combatStats.ISF,
    ASF: state.combatStats.ASF,
    knockoutValue: state.combatStats.knockoutValue,
    damageBonus: state.combatStats.damageBonus,
    combatActions: state.combatStats.combatActions,
  },
  gear: {
    equipment: state.gear.equipment,
  },
});

export default connect(mapStateToProps)(ActionsCard);
