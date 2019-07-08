import { removeObjectFromArray, calculateTotalWeight } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const removeFirearmReducer = (state, action) => {
  const newFirearmArray = removeObjectFromArray(state.gear.firearms, action.payload);
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmArray);

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
