import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const addFirearmReducer = (state, action) => {
  const newFirearmArray = [...state.gear.firearms, action.payload];

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
