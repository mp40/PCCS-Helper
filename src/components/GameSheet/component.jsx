import React from 'react';
import { PropTypes } from 'prop-types';

import WeaponStatsTable from '../WeaponStatsTable';
import CharacterInfo from '../CharacterInfo';
import ActionsTable from '../ActionsTable';
import HandToHandTable from '../HandToHandTable/HandToHandTable';
import BodyArmourTable from '../BodyArmourTable';
import FirearmNotes from '../FirearmNotes';
import KnockoutTable from '../KnockoutTable';
import ReactionTable from '../reactionTable';
import GrenadeList from './subComponents/GrenadeList/GrenadeList';
import RangeLookUp from './subComponents/rightRangeOddsSideBar/RangeLookUp';
import HitChanceLookUp from './subComponents/rightRangeOddsSideBar/HitChanceLookUp';
import SituationAndStanceModTable from './subComponents/shootingMods/SituationAndStanceModTable';
import TargetSizeTable from './subComponents/shootingMods/TargetSizeTable';

import { hydrateFirearmByObject } from '../../data/firearms/hydrate';

import { getFirearmNameAndRecoil, prepareHandToHandWeaponList } from './data';

import { salAndCeTable } from '../../core/tables';

import { combatStatsShape, gearShape } from '../../helpers/proptypeShapes';

import './GameSheet.css';
import '../App/App.css';

import styles from './styles.module.css';

const GameSheet = ({ name, characterStats, combatStats, gear, selectCurrentView }) => {
  React.useEffect(() => {
    window.print();
    selectCurrentView('createChar');
  });

  // mptodo - this seems to be importing unsed props
  const meleeWeaponList = prepareHandToHandWeaponList(gear.firearms, gear.equipment);

  const sal = salAndCeTable[characterStats.gunLevel];
  const ce = salAndCeTable[characterStats.handLevel];
  const isf = sal + characterStats.int;
  const asf = ce + characterStats.agi;

  return (
    <div className="a4GameSheet">
      <div className={styles.wrapper}>
        <div className={styles.main}>
          {name.length > 0 && (
          <div className={styles.name}>
            {`Name: ${name}`}
          </div>
          )}
          <div className={styles.firearm}>
            <div>
              <p>{getFirearmNameAndRecoil(gear.firearms[0], characterStats.gunLevel)}</p>
              <WeaponStatsTable weapon={hydrateFirearmByObject(gear.firearms[0])} sal={sal} size="a4" />
            </div>
            <FirearmNotes gunObj={gear.firearms[0]} />
          </div>
          <div className={styles.mainLower}>
            <div className={styles.left}>

              <div className={styles.infoAndActions}>
                <CharacterInfo />
                <ActionsTable
                  gunCombatActions={combatStats.gunCombatActions}
                  handCombatActions={combatStats.handCombatActions}
                />
              </div>

              { meleeWeaponList.length > 0 && (
              <HandToHandTable meleeList={meleeWeaponList} meleeLevel={characterStats.handLevel} />
              )}

              <div className={styles.armourReactionKnockoutRow}>
                <BodyArmourTable helmet={gear.helmet} vest={gear.vest} />
                <ReactionTable sal={sal} />
                <KnockoutTable knockoutValue={combatStats.knockoutValue} />
              </div>

              {gear.grenades.length > 0 && (
                <div className={styles.grenades}>
                  <GrenadeList grenades={gear.grenades} />
                </div>
              )}

            </div>

            <div className={styles.right}>
              <SituationAndStanceModTable />
              <TargetSizeTable />
            </div>

          </div>
        </div>

        <div className={styles.rangeAndOdds}>
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
