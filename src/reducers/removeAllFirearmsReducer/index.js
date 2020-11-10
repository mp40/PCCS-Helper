import { correctFloatingPoint } from '../reducerHelpers';

import { calculateTotalWeight } from '../../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const removeAllFirearmsReducer = (state, action) => {
  const updatedWeight = calculateTotalWeight({
    uniform: state.currentCharacter.uniform,
    equipment: state.currentCharacter.equipment,
    firearms: action.payload,
    launchers: state.currentCharacter.launchers,
    grenades: state.currentCharacter.grenades,
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
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
