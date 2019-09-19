import React from 'react';
import { PropTypes } from 'prop-types';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import CombatStatsInfo from './CombatStatsInfo';
import ActionTable from '../ActionsCard/ActionTable';
import HandToHandTable from '../HandToHandTable/HandToHandTable';
import BodyArmourTable from '../BodyArmourTable';
import FirearmNotes from '../FirearmNotes';
import KnockoutTable from '../KnockoutTable';
import ReactionTable from './ReactionTable';

import './GameSheet.css';
// import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import { testFAMAS, testRemington, testM16 } from '../../helpers/testHelpers'; // todo delete this line

const meleeNameList = {
  pistols: 'Pistol',
  smgs: 'SMG',
  light: 'Light Rifle',
  heavy: 'Heavy Rifle',
  rifles: true,
  sniperRifles: true,
};

const getRifleWeightClass = weight => (weight < 11.2 ? 'light' : 'heavy');

const getFirearmForMeleeList = (firearmsArray) => {
  const filteredArray = firearmsArray.filter(gun => meleeNameList[gun.list]);
  if (firearmsArray[0] === undefined) {
    return [];
  }
  const tag = filteredArray[0].list === 'rifles' || filteredArray[0].list === 'sniperRifles'
    ? getRifleWeightClass(filteredArray[0].weight)
    : filteredArray[0].list;

  return [meleeNameList[tag]];
};

const getEquipmentForMeleeList = (equipmentArray) => {
  if (!equipmentArray) {
    return [];
  }

  return equipmentArray.reduce((arr, equipObj) => (equipObj.tags.includes('Melee') ? [...arr, ...equipObj.melee] : [...arr]), []);
};

export const prepareHandToHandWeaponList = (
  firearmsArray, equipmentArray,
) => [
  ...getFirearmForMeleeList(firearmsArray),
  ...getEquipmentForMeleeList(equipmentArray),
].slice(0, 4);


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
};

const GameSheet = ({ totalWeight, characterStats, combatStats, gear }) =>
  // todo
  // const hold = () => {
// holding
  // };
  (
    <div className="a4GameSheet">
      <div className="a4ContentContainer">
        <div style={{ display: 'flex' }}>
          <div>
            {/* <WeaponsCardWeaponStats gunObj={gear.firearms[0]} sal={combatStats.SAL} size="a4" /> */}
            <WeaponsCardWeaponStats gunObj={testRemington()} sal={7} size="a4" />
          </div>
          <div className="firearm-notes-a4-wrapper">
            <FirearmNotes gunObj={testFAMAS()} />
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '.5cm' }}>
          {/* <CombatStatsInfo combatStats={combatStats} gunLevel={characterStats.gunLevel} handLevel={characterStats.handLevel}/> */}
          <CombatStatsInfo combatStats={combatStatsX} gunLevel={4} handLevel={1} />
          <div style={{ marginLeft: '.2cm' }}>
            <ActionTable combatActions={combatStatsX.combatActions} className="A4" />
          </div>
        </div>
        <HandToHandTable meleeList={['SMG', 'Saber', 'Stick (1 hand)', 'Stick (2 hands)']} meleeLevel={1} />
        <div style={{ display: 'flex' }}>
          <BodyArmourTable helmet={undefined} vest={undefined} />
          <div className="reaction-table-a4-wrapper" style={{ marginLeft: '0.2cm' }}>
            <ReactionTable sal={combatStatsX.SAL} />
          </div>
          <div className="knockout-table-a4-wrapper" style={{ marginLeft: '0.2cm' }}>
            <KnockoutTable knockoutValue={combatStatsX.knockoutValue} />
          </div>
        </div>


      </div>
    </div>
  );
  // above needs KV table, reaction table
GameSheet.propTypes = {
  totalWeight: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  characterStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  combatStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  gear: PropTypes.object,
};

// GameSheet.defaultProps = {

// }

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
