import { calculateTotalWeight } from '../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../helpers/helperFunctions');

export const correctFloatingPoint = number => Math.round(number * 1000) / 1000;

const returnUpdatedWeightAndGearArray = arrayToUpdate => (state, updatedArray) => {
  const newGear = { ...state.gear, [arrayToUpdate]: updatedArray };
  const newTotalWeight = calculateTotalWeight(newGear);

  const newBaseSpeed = calcBaseSpeed(state.characterStats.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.characterStats.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.combatStats.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ASF);


  return ({ ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    combatStats: { ...state.combatStats,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      combatActions: [newGunCombatActions, newMeleeCombatActions] },
    gear: { ...state.gear,
      [arrayToUpdate]: updatedArray } });
};
export const returnUpdatedWeightAndEquipment = returnUpdatedWeightAndGearArray('equipment');
export const returnUpdatedWeightAndFirearms = returnUpdatedWeightAndGearArray('firearms');

const incrementQuantity = incrementer => (array, targetName) => array.map((element) => {
  const object = element;
  if (object.name === targetName) {
    object.qty += incrementer;
  }
  return object;
});

export const returnUpdatedWeightAndArray = (state, payload, incrementer, arrayName) => {
  const newArray = incrementQuantity(incrementer)(state.gear[arrayName], payload.name);
  return returnUpdatedWeightAndGearArray(arrayName)(state, newArray);
};
