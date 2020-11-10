import { correctFloatingPoint } from '../reducerHelpers';
import { calculateTotalWeight } from '../../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

const magToRemove = (
  payloadMagazine, element,
) => element.cap === payloadMagazine.cap && element.weight === payloadMagazine.weight;

export const filterOutCustom = (
  array, payloadMagazine,
) => array.filter((element) => !magToRemove(payloadMagazine, element));

const hideNonCustom = (array, payloadMagazine) => array.map((element) => {
  const magazine = element;
  if (magToRemove(payloadMagazine, magazine)) {
    magazine.qty = 0;
    magazine.removed = true;
  }
  return magazine;
});

export const removeMagazineReducer = (state, action) => {
  const newFirearmsArray = state.currentCharacter.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag = action.payload.magazine.custom
        ? filterOutCustom(gun.mag, action.payload.magazine)
        : hideNonCustom(gun.mag, action.payload.magazine);
    }
    return gun;
  });

  const updatedWeight = calculateTotalWeight({
    uniform: state.currentCharacter.uniform,
    equipment: state.currentCharacter.equipment,
    firearms: newFirearmsArray,
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
      firearms: newFirearmsArray,
      baseSpeed: newBaseSpeed,
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
