import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../reducerHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const changeUniformReducer = (state, action) => {
  const updatedGear = { ...state.gear, uniform: action.payload };
  const newTotalWeight = calculateTotalWeight(updatedGear);


  const newBaseSpeed = calcBaseSpeed(state.characterStats.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.characterStats.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.combatStats.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ASF);

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    combatStats: { ...state.combatStats,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      combatActions: [newGunCombatActions, newMeleeCombatActions] },
    gear: updatedGear };
};
