import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { decreaseLauncherAmmo } from '../reducerHelpers';
import { correctFloatingPoint } from '../../utils';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const decreaseLauncherAmmoReducer = (state, action) => {
  const updatedWeapon = action.payload.weapon;

  updatedWeapon.mag = decreaseLauncherAmmo(updatedWeapon.mag, action.payload.magazine.class);
  const newLaunchers = modifyObjectQtyInArray(state.currentCharacter.launchers, updatedWeapon);

  const newTotalWeight = correctFloatingPoint(state.currentCharacter.totalWeight - action.payload.magazine.weight);

  const newBaseSpeed = calcBaseSpeed(state.currentCharacter.str, newTotalWeight);
  const newMaxSpeed = calcMaxSpeed(state.currentCharacter.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.currentCharacter.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ASF);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      totalWeight: newTotalWeight,
      launchers: newLaunchers,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
