import { calculateTotalWeight } from '../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../helpers/helperFunctions');

export const correctFloatingPoint = (number) => Math.round(number * 1000) / 1000;

const returnUpdatedWeightAndGear = (gearToUpdate) => (state, updatedGear) => {
  const newGear = { ...state.gear, [gearToUpdate]: updatedGear };
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
      [gearToUpdate]: updatedGear } });
};
export const returnUpdatedWeightAndEquipment = returnUpdatedWeightAndGear('equipment');
export const returnUpdatedWeightAndFirearms = returnUpdatedWeightAndGear('firearms');
export const returnUpdatedWeightAndGrenades = returnUpdatedWeightAndGear('grenades');

export const returnUpdatedUniform = returnUpdatedWeightAndGear('uniform');
export const returnUpdatedVest = returnUpdatedWeightAndGear('vest');
export const returnUpdatedHelmet = returnUpdatedWeightAndGear('helmet');

const incrementQuantity = (incrementer) => (array, targetName) => array.map((element) => {
  const object = element;
  if (object.name === targetName) {
    object.qty += incrementer;
  }
  return object;
});

export const returnUpdatedWeightAndArray = (state, payload, incrementer, arrayName) => {
  const newArray = incrementQuantity(incrementer)(state.gear[arrayName], payload.name);
  return returnUpdatedWeightAndGear(arrayName)(state, newArray);
};
