import { correctFloatingPoint } from '../../utils';
import { calculateTotalWeight } from '../../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const replaceMagazineReducer = (state, action) => {
  const newFirearmsArray = state.currentCharacter.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag.map((ele) => {
        const mag = ele;
        if (
          mag.removed === true
        && mag.cap === action.payload.magazine.cap
        && mag.weight === action.payload.magazine.weight
        ) {
          mag.removed = false;
        }
        return mag;
      });
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
