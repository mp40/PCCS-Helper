import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const addFirearmReducer = (state, action) => {
  const newTotalWeight = state.totalWeight + action.payload.weight;
  const newFirearmArray = [...state.gear.firearms, action.payload];

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
