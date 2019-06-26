export const modifyFirearmReducer = (state, action) => {
  const newWeight = state.totalWeight + action.payload.modNote.weightMod;

  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    if (element.name === action.payload.firearm) {
      const modifiedFirearm = element;
      modifiedFirearm.weight += action.payload.modNote.weightMod;
      modifiedFirearm.modNote = action.payload.modNote;
      return modifiedFirearm;
    }
    return element;
  });


  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
