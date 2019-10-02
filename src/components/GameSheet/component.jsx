import React from 'react';
import { PropTypes } from 'prop-types';
import WeaponsCardWeaponStats from '../WeaponsCardWeaponStats';
import CombatStatsInfo from './CombatStatsInfo';
import ActionTable from '../ActionsCard/ActionTable';
import HandToHandTable from '../HandToHandTable/HandToHandTable';
import BodyArmourTable from '../BodyArmourTable';
import FirearmNotes from '../FirearmNotes';
import KnockoutTable from '../KnockoutTable';
import ReactionTable from './subComponents/ReactionTable/ReactionTable';
import GrenadeList from './subComponents/GrenadeList/GrenadeList';
import RangeLookUp from './subComponents/rightRangeOddsSideBar/RangeLookUp';
import HitChanceLookUp from './subComponents/rightRangeOddsSideBar/HitChanceLookUp';
import SituationAndStanceModTable from './subComponents/shootingMods/SituationAndStanceModTable';
import TargetSizeTable from './subComponents/shootingMods/TargetSizeTable';

import './GameSheet.css';

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

const GameSheet = ({ characterStats, combatStats, gear }) => (
  <div className="a4GameSheet">
    {/* <iframe title="printable gamesheet" id="printable-gamesheet" className="a4GameSheet"> */}
    <div className="a4ContentContainer">
      <div className="main-content-right">
        <div style={{ display: 'flex' }}>
          <div>
            <WeaponsCardWeaponStats gunObj={gear.firearms[0]} sal={combatStats.SAL} size="a4" />
            {/* <WeaponsCardWeaponStats gunObj={testFAMAS()} sal={7} size="a4" /> */}
          </div>
          <div className="firearm-notes-a4-wrapper">
            <FirearmNotes gunObj={gear.firearms[0]} />
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '.5cm' }}>
          <div className="game-data-col-a">
            <CombatStatsInfo combatStats={combatStats} gunLevel={characterStats.gunLevel} handLevel={characterStats.handLevel} />
            {/* <CombatStatsInfo combatStats={combatStatsX} gunLevel={4} handLevel={1} /> */}
            <div style={{ marginLeft: '.2cm' }}>
              <ActionTable combatActions={combatStats.combatActions} className="A4" />
            </div>
            <HandToHandTable meleeList={prepareHandToHandWeaponList(gear.firearms, gear.equipment)} meleeLevel={1} />
            <BodyArmourTable helmet={gear.helmet} vest={gear.vest} />
            <div className="reaction-table-a4-wrapper" style={{ marginLeft: '0.2cm' }}>
              <ReactionTable sal={combatStats.SAL} />
            </div>
            <div className="knockout-table-a4-wrapper" style={{ marginLeft: '0.2cm' }}>
              <KnockoutTable knockoutValue={combatStats.knockoutValue} />
            </div>
            <div className="grenade-list-a4-wrapper">
              <GrenadeList grenades={gear.grenades} />
            </div>
          </div>
          <div className="alm-mods-col">
            <SituationAndStanceModTable />
            <TargetSizeTable />
          </div>
        </div>
      </div>
      <div className="range-odds-flex-container">
        <RangeLookUp />
        <HitChanceLookUp />
      </div>
    </div>
    {/* </iframe> */}
  </div>
);
GameSheet.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  characterStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  combatStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  gear: PropTypes.object,
};

// GameSheet.defaultProps = {
//   gear.firearms:
// }

export default GameSheet;
