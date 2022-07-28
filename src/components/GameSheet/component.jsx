import React from 'react';
import { PropTypes } from 'prop-types';

import WeaponStatsTable from '../WeaponStatsTable';
import CharacterInfo from '../CharacterInfo';
import ActionsTable from '../ActionsTable';
import HandToHandTable from '../HandToHandTable';
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

import { getFirearmNameAndRecoil } from './data';
import { parseFirearmsForMelee, parseEquipmentForMelee } from '../../helpers/melee';

import { salAndCeTable } from '../../core/tables';

import { grenadeShape, gunObjShape } from '../../helpers/proptypeShapes';

import './GameSheet.css';
import '../App/App.css';

import styles from './styles.module.css';

const GameSheet = (
  { name,
    gunLevel,
    handLevel,
    gunCombatActions,
    handCombatActions,
    knockoutValue,
    equipment,
    firearms,
    grenades,
    helmet,
    vest,
    closeModal },
) => {
  React.useEffect(() => {
    window.print();
    closeModal();
  });

  const meleeWeaponList = [
    ...parseFirearmsForMelee(firearms),
    ...parseEquipmentForMelee(equipment),
  ];

  const sal = salAndCeTable[gunLevel];

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
              <p>{getFirearmNameAndRecoil(firearms[0], gunLevel)}</p>
              <WeaponStatsTable weapon={hydrateFirearmByObject(firearms[0])} sal={sal} size="a4" />
            </div>
            <FirearmNotes gunObj={firearms[0]} />
          </div>
          <div className={styles.mainLower}>
            <div className={styles.left}>

              <div className={styles.infoAndActions}>
                <CharacterInfo />
                <ActionsTable
                  gunCombatActions={gunCombatActions}
                  handCombatActions={handCombatActions}
                />
              </div>

              <div className={styles.melee}>
                <HandToHandTable meleeList={meleeWeaponList} meleeLevel={handLevel} />
              </div>

              <div className={styles.armourReactionKnockoutRow}>
                <BodyArmourTable helmet={helmet} vest={vest} />
                <ReactionTable sal={sal} />
                <KnockoutTable knockoutValue={knockoutValue} />
              </div>

              <div className={styles.grenades}>
                <GrenadeList grenades={grenades} />
              </div>

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
  gunLevel: PropTypes.number.isRequired,
  handLevel: PropTypes.number.isRequired,
  gunCombatActions: PropTypes.number,
  handCombatActions: PropTypes.number,
  knockoutValue: PropTypes.number.isRequired,
  equipment: PropTypes.arrayOf(PropTypes.object),
  firearms: PropTypes.arrayOf(gunObjShape),
  grenades: PropTypes.arrayOf(grenadeShape),
  helmet: PropTypes.string,
  vest: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

GameSheet.defaultProps = {
  name: '',
};

export default GameSheet;
