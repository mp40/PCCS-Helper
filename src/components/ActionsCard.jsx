import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { actionsPerImpulse } = require('../helpers/helperFunctions');

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

            <tr id="gunActionTable" className="actionsTable">
              <td className="actionType">Gun</td>
              <td className="actions">{gunActions[0]}</td>
              <td className="actions">{gunActions[1]}</td>
              <td className="actions">{gunActions[2]}</td>
              <td className="actions">{gunActions[3]}</td>
            </tr>
            <tr id="handActionTable" className="actionsTable">
              <td className="actionType">Hand</td>
              <td className="actions">{handActions[0]}</td>
              <td className="actions">{handActions[1]}</td>
              <td className="actions">{handActions[2]}</td>
              <td className="actions">{handActions[3]}</td>
            </tr>
          </tbody>

        </table>

        <table className="additionalCombatData">
          <tbody>
            <tr>
              <td style={{ width: '33.33%' }}>
                BS
                {' '}
                {combatStats.baseSpeed}
              </td>
              <td style={{ width: '33.33%' }}>
                MS
                {' '}
                {combatStats.maxSpeed}
              </td>
              <td style={{ width: '33.33%' }}>
                DB
                {' '}
                {combatStats.damageBonus}
              </td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>
  );
};

ActionsCard.propTypes = {
  combatStats: PropTypes.shape({
    ASF: PropTypes.number,
    CE: PropTypes.number,
    ISF: PropTypes.number,
    SAL: PropTypes.number,
    baseSpeed: PropTypes.number,
    combatActions: PropTypes.arrayOf(PropTypes.number),
    damageBonus: PropTypes.number,
    knockoutValue: PropTypes.number,
    maxSpeed: PropTypes.number,
  }),
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
