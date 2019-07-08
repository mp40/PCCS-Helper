import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const removeAllEquipmentReducer = (state, action) => {
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, action.payload, state.gear.firearms);

  return returnUpdatedWeightAndEquipment(state, newTotalWeight, action.payload);
};
