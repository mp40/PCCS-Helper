import { incrementQuantity } from '../reducerHelpers';
import { correctFloatingPoint } from '../../utils';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const increaseEquipmentReducer = (state, action) => {
  const newTotalWeight = correctFloatingPoint(state.currentCharacter.totalWeight + action.payload.weight);
  const newEquipment = incrementQuantity(1)(state.currentCharacter.equipment, action.payload.name);

  const newBaseSpeed = calcBaseSpeed(state.currentCharacter.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.currentCharacter.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.currentCharacter.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ASF);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      totalWeight: newTotalWeight,
      equipment: newEquipment,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
