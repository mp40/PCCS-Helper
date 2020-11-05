import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { increaseLauncherAmmo, correctFloatingPoint } from '../reducerHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const increaseMagazineReducer = (state, action) => {
  const newGunObj = action.payload.weapon;

  newGunObj.mag = action.payload.magazine.class
    ? increaseLauncherAmmo(newGunObj.mag, action.payload.magazine.class)
    : modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);

  const newFirearms = modifyObjectQtyInArray(state.currentCharacter.firearms, newGunObj);

  const newTotalWeight = correctFloatingPoint(state.currentCharacter.totalWeight + action.payload.magazine.weight);

  const newBaseSpeed = calcBaseSpeed(state.currentCharacter.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.currentCharacter.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.currentCharacter.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ASF);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      totalWeight: newTotalWeight,
      firearms: newFirearms,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
