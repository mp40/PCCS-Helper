/* eslint-disable array-callback-return */
import { correctFloatingPoint } from '../../utils';
import { calculateTotalWeight } from '../../helpers/actionHelpers';

const {
  calcBaseSpeed,
  calcMaxSpeed,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

const filterNotes = (notes, payloadNote) => notes.filter((currentNote) => {
  const thisNote = currentNote;
  if (thisNote.note !== payloadNote) {
    return thisNote;
  }
});

export const removeFirearmModificationReducer = (state, action) => {
  const newFirearmsArray = state.currentCharacter.firearms.map((element) => {
    const firearm = element;

    if (firearm.name === action.payload.firearm) {
      const newNotes = filterNotes(firearm.modNotes, action.payload.modNote.note);
      firearm.modNotes = newNotes;
      firearm.weight -= action.payload.modNote.weightMod;
    }

    return firearm;
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
