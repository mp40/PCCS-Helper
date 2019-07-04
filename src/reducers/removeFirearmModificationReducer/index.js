/* eslint-disable array-callback-return */

export const removeFirearmModificationReducer = (state, action) => {
  const newWeight = state.totalWeight - action.payload.modNote.weightMod;
  const updatedFirearmsArray = state.gear.firearms.map((element) => {
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


  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
