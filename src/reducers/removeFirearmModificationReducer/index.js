const removeKeyFromFirearm = firearm => Object.keys(firearm).reduce((object, key) => {
  const objectToReturn = object;
  if (key !== 'modNote') {
    objectToReturn[key] = firearm[key];
  }
  return objectToReturn;
}, {});

export const removeFirearmModificationReducer = (state, action) => {
  const newWeight = state.totalWeight - action.payload.modNote.weightMod;

  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    if (element.name === action.payload.firearm) {
      const modifiedFirearm = element;
      modifiedFirearm.weight -= action.payload.modNote.weightMod;
      return removeKeyFromFirearm(modifiedFirearm);
    }
    return element;
  });


  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
