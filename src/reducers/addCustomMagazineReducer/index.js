import { correctFloatingPoint } from '../../utils';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const addCustomMagazineReducer = (state, action) => {
  const updatedFirearmsArray = state.currentCharacter.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag = [...gun.mag, action.payload.magazine];
    }
    return gun;
  });

  const newTotalWeight = correctFloatingPoint(state.currentCharacter.totalWeight + action.payload.magazine.weight);

  const newBaseSpeed = calcBaseSpeed(state.currentCharacter.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.currentCharacter.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.currentCharacter.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ASF);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      totalWeight: newTotalWeight,
      firearms: updatedFirearmsArray,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
