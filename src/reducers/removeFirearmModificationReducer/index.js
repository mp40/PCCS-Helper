/* eslint-disable array-callback-return */
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

const filterNotes = (notes, payloadNote) => notes.filter((currentNote) => {
  const thisNote = currentNote;
  if (thisNote.note !== payloadNote) {
    return thisNote;
  }
});

export const removeFirearmModificationReducer = (state, action) => {
  const newTotalWeight = state.totalWeight - action.payload.modNote.weightMod;
  const newFirearmArray = state.gear.firearms.map((element) => {
    const firearm = element;
    if (firearm.name === action.payload.firearm) {
      const newNotes = filterNotes(firearm.modNotes, action.payload.modNote.note);
      firearm.modNotes = newNotes;
      firearm.weight -= action.payload.modNote.weightMod;
    }
    return firearm;
  });

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
