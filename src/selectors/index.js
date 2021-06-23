import { getFullFirearmSystemWeightByObject } from '../data/firearms';
import { getLauncherByName } from '../data/firearms/launchers';
import { getGrenadeWeightByName } from '../data/grenades';
import { getLauncherWeightByName } from '../data/launchers';

import { getBaseSpeed, getMaxSpeed, getCombatActions, getDamageBonus } from '../core';
import { salAndCeTable } from '../core/tables';

import { uniformWeights, getHelmetWeightByName, getVestWeightByName } from '../data/uniformAndArmourTypes';

import { correctFloatingPoint } from '../utils';

const getFirearmAndSpareAmmoWeight = (firearm) => {
  const firearmWeight = getFullFirearmSystemWeightByObject(firearm) * firearm.qty;
  const ammoWeight = firearm.mag.reduce((acc, mag) => acc + (mag.qty * mag.weight), 0);

  let grenadeWeight = 0;
  const grenadeLauncher = getLauncherByName(firearm?.launcher?.attached);

  if (grenadeLauncher) {
    const { weight } = grenadeLauncher.mag[0];
    grenadeWeight = firearm.launcher.mag.reduce((acc, mag) => acc + (mag.qty * weight), 0);
  }

  return firearmWeight + ammoWeight + grenadeWeight;
};

export const selectTotalWeightOfFirearms = (state) => {
  const firearms = [...state.currentCharacter.firearms];

  const weight = firearms.reduce((acc, firearm) => acc + getFirearmAndSpareAmmoWeight(firearm), 0);

  return correctFloatingPoint(weight);
};

export const selectTotalWeightOfGrenades = (state) => {
  const grenades = [...state.currentCharacter.grenades];

  const weight = grenades.reduce((acc, grenade) => acc + grenade.qty * getGrenadeWeightByName(grenade.name), 0);

  return correctFloatingPoint(weight);
};

export const selectTotalWeightOfLaunchers = (state) => {
  const launchers = [...state.currentCharacter.launchers];

  const weight = launchers.reduce((acc, launcher) => {
    const ammoWeight = launcher.mag.reduce((sum, mag) => {
      if (mag.weight === '-') {
        return sum;
      }

      return sum + mag.qty * mag.weight;
    }, 0);

    return acc + ammoWeight + launcher.qty * getLauncherWeightByName(launcher.name);
  }, 0);

  return correctFloatingPoint(weight);
};

export const selectTotalWeightOfAllWeapons = (state) => {
  const weight = selectTotalWeightOfFirearms(state)
  + selectTotalWeightOfGrenades(state)
  + selectTotalWeightOfLaunchers(state);

  return correctFloatingPoint(weight);
};

export const selectTotalWeightOfEquipment = (state) => {
  const equipment = [...state.currentCharacter.equipment];

  const weight = equipment.reduce((acc, item) => acc + item.qty * item.weight, 0);

  return correctFloatingPoint(weight);
};

export const selectTotalWeightOfClothingAndBodyArmour = (state) => {
  let weight = uniformWeights[state.currentCharacter.uniform];

  if (state.currentCharacter.helmet) {
    weight += getHelmetWeightByName(state.currentCharacter.helmet);
  }

  if (state.currentCharacter.vest) {
    weight += getVestWeightByName(state.currentCharacter.vest);
  }

  return correctFloatingPoint(weight);
};

export const selectTotalWeightOfAllGearAndWeapons = (state) => {
  const weight = selectTotalWeightOfFirearms(state)
  + selectTotalWeightOfGrenades(state)
  + selectTotalWeightOfLaunchers(state)
  + selectTotalWeightOfEquipment(state)
  + selectTotalWeightOfClothingAndBodyArmour(state);

  return correctFloatingPoint(weight);
};

const selectBaseSpeed = (state) => {
  const { str } = state.currentCharacter;

  return getBaseSpeed(str, selectTotalWeightOfAllGearAndWeapons(state));
};

const selectMaxSpeed = (state) => {
  const { agi } = state.currentCharacter;

  return getMaxSpeed(agi, selectBaseSpeed(state));
};

const selectSal = (state) => {
  const { gunLevel } = state.currentCharacter;

  return salAndCeTable[gunLevel];
};

const selectCe = (state) => {
  const { handLevel } = state.currentCharacter;

  return salAndCeTable[handLevel];
};

export const selectGunCombatActions = (state) => {
  const isf = selectSal(state) + state.currentCharacter.int;

  return getCombatActions(selectMaxSpeed(state), isf);
};

export const selectHandCombatActions = (state) => {
  const asf = selectCe(state) + state.currentCharacter.agi;

  return getCombatActions(selectMaxSpeed(state), asf);
};

const selectDamageBonus = (state) => {
  const asf = selectSal(state) + state.currentCharacter.agi;

  return getDamageBonus(selectMaxSpeed(state), asf);
};

// mptodo check if used
export const selectCombatStats = (state) => {
  const baseSpeed = selectBaseSpeed(state);
  const maxSpeed = selectMaxSpeed(state);
  const gunCombatActions = selectGunCombatActions(state);
  const handCombatActions = selectHandCombatActions(state);
  const damageBonus = selectDamageBonus(state);

  return {
    baseSpeed,
    maxSpeed,
    gunCombatActions,
    handCombatActions,
    damageBonus,
  };
};

export const selectMovementAndDamageBonus = (state) => {
  const baseSpeed = selectBaseSpeed(state);
  const maxSpeed = selectMaxSpeed(state);
  const damageBonus = selectDamageBonus(state);

  return {
    baseSpeed,
    maxSpeed,
    damageBonus,
  };
};

export const selectKnockoutValue = (state) => {
  const { agi, gunLevel, handLevel } = state.currentCharacter;

  let highestLevel = 1;

  if (gunLevel > 1 && gunLevel >= handLevel) {
    highestLevel = gunLevel;
  }

  if (handLevel > gunLevel) {
    highestLevel = handLevel;
  }

  return Math.floor((agi * 0.5) * highestLevel);
};
