/* eslint-disable array-callback-return */
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const removeFirearmModificationReducer = (state, action) => {
  const newTotalWeight = state.totalWeight - action.payload.modNote.weightMod;
  const newFirearmArray = state.gear.firearms.map((element) => {
    const firearm = element;
    if (firearm.name === action.payload.firearm) {
      const newNotes = firearm.modNotes.filter((currentNote) => {
        const thisNote = currentNote;
        if (thisNote.note !== action.payload.modNote.note) {
          return thisNote;
        }
      });
      firearm.modNotes = newNotes;
      firearm.weight -= action.payload.modNote.weightMod;
    }
    return firearm;
  });

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
