import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import WeaponStatsTable from '../WeaponStatsTable';
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

import { combatStatsShape, gearShape } from '../../helpers/proptypeShapes';

import { getFirearmNameAndRecoil, prepareHandToHandWeaponList } from './data';

import './GameSheet.css';

const GameSheet = ({ name, characterStats, combatStats, gear, selectCurrentView }) => {
  useEffect(() => {
    window.print();
    selectCurrentView('createChar');
  });

  const meleeWeaponList = prepareHandToHandWeaponList(gear.firearms, gear.equipment);

  return (
    <div className="a4GameSheet">
      <div className="a4ContentContainer">
        <div className="main-content-right">
          {name.length > 0 && (
          <div className="character-name">
            {`Name: ${name}`}
          </div>
          )}
          <div style={{ display: 'flex' }}>
            <div>
              <p className="firearm-name">{getFirearmNameAndRecoil(gear.firearms[0], characterStats.gunLevel)}</p>
              <WeaponStatsTable weapon={gear.firearms[0]} sal={combatStats.SAL} size="a4" />
            </div>
            <div className="firearm-notes-a4-wrapper">
              <FirearmNotes gunObj={gear.firearms[0]} />
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '.5cm' }}>
            <div className="game-data-col-a">
              <CombatStatsInfo
                combatStats={combatStats}
                gunLevel={characterStats.gunLevel}
                handLevel={characterStats.handLevel}
              />
              <div className="ActionTable-a4-container">
                <ActionTable
                  gunCombatActions={combatStats.gunCombatActions}
                  handCombatActions={combatStats.handCombatActions}
                  className="A4"
                />
              </div>
              { meleeWeaponList.length > 0 && (
              <HandToHandTable meleeList={meleeWeaponList} meleeLevel={characterStats.handLevel} />
              )}
              <BodyArmourTable helmet={gear.helmet} vest={gear.vest} />
              <div className="reaction-table-a4-wrapper" style={{ marginLeft: '0.2cm' }}>
                <ReactionTable sal={combatStats.SAL} />
              </div>
              <div className="knockout-table-a4-wrapper">
                <KnockoutTable knockoutValue={combatStats.knockoutValue} />
              </div>
              {gear.grenades.length > 0 && (
              <div className="grenade-list-a4-wrapper">
                <GrenadeList grenades={gear.grenades} />
              </div>
              )}
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
    </div>
  );
};

GameSheet.propTypes = {
  name: PropTypes.string,
  characterStats: PropTypes.objectOf(PropTypes.number),
  combatStats: combatStatsShape,
  gear: gearShape,
  selectCurrentView: PropTypes.func,
};

GameSheet.defaultProps = {
  name: '',
};

export default GameSheet;
