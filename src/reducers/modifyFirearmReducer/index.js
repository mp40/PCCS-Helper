import { correctFloatingPoint } from '../../utils';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

const insertNewModification = (modificationArray = [], note) => [...modificationArray, note];

export const modifyFirearmReducer = (state, action) => {
  const newFirearmsArray = state.currentCharacter.firearms.map((element) => {
    if (element.name === action.payload.firearm) {
      const modifiedFirearm = element;
      modifiedFirearm.weight += action.payload.modNote.weightMod;
      modifiedFirearm.modNotes = insertNewModification(modifiedFirearm.modNotes, action.payload.modNote);
      return modifiedFirearm;
    }
    return element;
  });

  const newTotalWeight = correctFloatingPoint(state.currentCharacter.totalWeight + action.payload.modNote.weightMod);

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
