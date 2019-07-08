import { returnUpdatedWeightAndFirearms, updateQuantityOfFirearm } from '../reducerHelpers';

export const increaseFirearmReducer = (state, action) => {
  const newFirearmArray = updateQuantityOfFirearm(state.gear.firearms, action.payload.name, 1);
  const newTotalWeight = state.totalWeight + action.payload.weight;

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
