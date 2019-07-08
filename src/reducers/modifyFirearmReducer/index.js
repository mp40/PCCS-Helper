import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

const insertNewModification = (modificationArray = [], note) => [...modificationArray, note];

export const modifyFirearmReducer = (state, action) => {
  const newTotalWeight = state.totalWeight + action.payload.modNote.weightMod;
  const newFirearmArray = state.gear.firearms.map((element) => {
    if (element.name === action.payload.firearm) {
      const modifiedFirearm = element;
      modifiedFirearm.weight += action.payload.modNote.weightMod;
      modifiedFirearm.modNotes = insertNewModification(modifiedFirearm.modNotes, action.payload.modNote);
      return modifiedFirearm;
    }
    return element;
  });

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
