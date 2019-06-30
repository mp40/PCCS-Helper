/* eslint-disable array-callback-return */
// const removeKeyFromFirearm = firearm => Object.keys(firearm).reduce((object, key) => {
//   const objectToReturn = object;
//   if (key !== 'modNote') {
//     objectToReturn[key] = firearm[key];
//   }
//   return objectToReturn;
// }, {});

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
