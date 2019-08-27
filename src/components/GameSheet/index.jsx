import React from 'react';
import { PropTypes } from 'prop-types';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import CombatStatsInfo from './CombatStatsInfo'
import ActionTable from '../ActionsCard/ActionTable';
import HandToHandTable from './HandToHandTable';

import './GameSheet.css';
// import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import { testFAMAS } from '../../helpers/testHelpers';

const combatStatsX = {
  baseSpeed: 2,
  maxSpeed: 6,
  SAL: 7,
  CE: 3,
  ISF: 17,
  ASF: 13,
  knockoutValue: 9,
  damageBonus: 1.5,
  combatActions: [5, 3],
}

const GameSheet = ({ totalWeight, characterStats, combatStats, gear }) => {
  // todo
  // const hold = () => {
    // holding
  // };
  return (
    <div className="a4GameSheet">
      <div className="a4ContentContainer">
        <div style={{display:'flex'}}>
          {/* <CombatStatsInfo combatStats={combatStats} gunLevel={characterStats.gunLevel} handLevel={characterStats.handLevel}/> */}
          <CombatStatsInfo combatStats={combatStatsX} gunLevel={4} handLevel={1}/>
          <div style={{marginLeft:'.2cm'}}>
          <ActionTable combatActions={combatStatsX.combatActions} className="A4"/>
          </div>
        </div>
        {/* <WeaponsCardWeaponStats gunObj={gear.firearms[0]} sal={combatStats.SAL} size="a4" /> */}
        <WeaponsCardWeaponStats gunObj={testFAMAS()} sal={7} size="a4" />
        <HandToHandTable meleeList={['SMG', "Saber"]} meleeLevel={1}/>
      </div>
    </div>
  );
};

GameSheet.propTypes = {
  totalWeight: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  characterStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  combatStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  gear: PropTypes.object,
};

export default GameSheet;

// const gearDouble = () => ({
//   uniform: 'Normal',
//   equipment: [],
//   firearms: [testFAMAS()],
//   grenades: [],
//   launchers: [],
// });

// const characterStats = {
//   str: 10,
//   int: 10,
//   hlt: 10,
//   wil: 10,
//   agi: 10,
//   gunLevel: 4,
//   handLevel: 1,
// };

// const combatStats = {
//   baseSpeed: 2,
//   maxSpeed: 6,
//   SAL: 7,
//   CE: 3,
//   ISF: 17,
//   ASF: 13,
//   knockoutValue: 9,
//   damageBonus: 1.5,
//   combatActions: [5, 3],
// };

// const props = {
//   totalWeight: 20.5,
//   characterStats,
//   combatStats,
//   gear: gearDouble(),
// };
