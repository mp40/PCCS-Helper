import { correctFloatingPoint } from '../reducerHelpers';

import { calculateTotalWeight } from '../../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const removeAllWeaponsReducer = (state, action) => {
  const updatedWeight = calculateTotalWeight({
    uniform: state.currentCharacter.uniform,
    equipment: state.currentCharacter.equipment,
    firearms: action.payload,
    launchers: action.payload,
    grenades: action.payload,
    helmet: state.currentCharacter.helmet,
    vest: state.currentCharacter.vest,
  });

  const newTotalWeight = correctFloatingPoint(updatedWeight);

  const newBaseSpeed = calcBaseSpeed(state.currentCharacter.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.currentCharacter.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.currentCharacter.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ASF);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      totalWeight: newTotalWeight,
      firearms: action.payload,
      grenades: action.payload,
      launchers: action.payload,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
