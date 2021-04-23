import { correctFloatingPoint, findObjectByNameInArray } from '../../utils';
import { calculateTotalWeight } from '../../helpers/actionHelpers';

import {
  hydrateFirearmList,
  hydrateLauncherList,
  hydrateGrenadeList,
} from './data';

import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
  findSAL,
  calcSkillFactor,
  findHighestCombatLevel,
  calcKV,
} = require('../../helpers/helperFunctions');

export const hydrateCurrentCharacterReducer = (state, action) => {
  const dehydratedCharacter = action.payload;

  const hydratedFirearms = hydrateFirearmList(dehydratedCharacter.firearms);
  const hydratedLaunchers = hydrateLauncherList(dehydratedCharacter.launchers);
  const hydratedGrenades = hydrateGrenadeList(dehydratedCharacter.grenades);

  const helmet = findObjectByNameInArray(helmetStats(), dehydratedCharacter.helmet);
  const vest = findObjectByNameInArray(bodyArmorStats(), dehydratedCharacter.vest);

  const gear = {
    uniform: dehydratedCharacter.uniform,
    equipment: dehydratedCharacter.equipment,
    firearms: hydratedFirearms,
    launchers: hydratedLaunchers,
    grenades: hydratedGrenades,
    helmet,
    vest,
  };

  let newTotalWeight = calculateTotalWeight(gear);
  newTotalWeight = correctFloatingPoint(newTotalWeight);

  const newBaseSpeed = calcBaseSpeed(dehydratedCharacter.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(dehydratedCharacter.agi, newBaseSpeed);

  const newSkillAccuracyLevel = findSAL(dehydratedCharacter.gun_level);
  const newIntelligenceSkillFactor = calcSkillFactor(dehydratedCharacter.int, newSkillAccuracyLevel);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, newIntelligenceSkillFactor);

  const newCombatEfficency = findSAL(dehydratedCharacter.hand_level);
  const newAgilitySkillFactor = calcSkillFactor(dehydratedCharacter.agi, newCombatEfficency);
  const newDamageBonus = calcDB(newMaxSpeed, newAgilitySkillFactor);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, newAgilitySkillFactor);

  const highestCombatSkill = findHighestCombatLevel(dehydratedCharacter.gun_level, dehydratedCharacter.hand_level);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      characterId: dehydratedCharacter.character_id,
      name: dehydratedCharacter.character_name,
      str: dehydratedCharacter.str,
      int: dehydratedCharacter.int,
      hlt: dehydratedCharacter.hlt,
      wil: dehydratedCharacter.wil,
      agi: dehydratedCharacter.agi,
      gunLevel: dehydratedCharacter.gun_level,
      handLevel: dehydratedCharacter.hand_level,
      totalWeight: newTotalWeight,
      SAL: newSkillAccuracyLevel,
      ISF: newIntelligenceSkillFactor,
      CE: newCombatEfficency,
      ASF: newAgilitySkillFactor,
      damageBonus: newDamageBonus,
      knockoutValue: calcKV(dehydratedCharacter.wil, highestCombatSkill),
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions,
      uniform: dehydratedCharacter.uniform,
      helmet,
      vest,
      equipment: dehydratedCharacter.equipment,
      firearms: hydratedFirearms,
      grenades: hydratedGrenades,
      launchers: hydratedLaunchers,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed } };
};
