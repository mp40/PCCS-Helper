import { baseSpeedTable, maxSpeedTable, combatActionsTable, damageBonusTable } from './tables';

export const getBaseSpeed = (str, lbs) => {
  let index;

  const weightRange = baseSpeedTable.lbs;

  for (let i = weightRange.length - 1; i >= 0; i -= 1) {
    if (weightRange[i] >= lbs) {
      index = i;
    } else {
      break;
    }
  }

  return baseSpeedTable[str][index] || 0;
};

export const getMaxSpeed = (agi, baseSpeed) => {
  if (baseSpeed === 0) {
    return 0;
  }

  let index;

  for (let i = 0; i < maxSpeedTable.baseSpeed.length; i += 1) {
    if (maxSpeedTable.baseSpeed[i] === baseSpeed) {
      index = i;
      break;
    }
  }

  return maxSpeedTable[agi][index];
};

export const getCombatActions = (maxSpeed, skillFactor) => {
  if (maxSpeed === 0) {
    return 0;
  }

  let index;

  const skillRange = combatActionsTable.skillFactor;

  for (let i = 0; i < skillRange.length; i += 1) {
    if (skillRange[i] <= skillFactor) {
      index = i;
    } else {
      break;
    }
  }

  return combatActionsTable[maxSpeed][index];
};

export const getDamageBonus = (maxSpeed, skillFactor) => {
  let index;

  const skillRange = damageBonusTable.skillFactor;

  for (let i = 0; i < skillRange.length; i += 1) {
    if (skillRange[i] <= skillFactor) {
      index = i;
    } else {
      break;
    }
  }

  return damageBonusTable[maxSpeed][index] || 0;
};
