import { removeObjectFromArray, calculateTotalWeight } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const removeEquipmentReducer = (state, action) => {
  const updatedEquipmentArray = removeObjectFromArray(state.gear.equipment, action.payload);
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, updatedEquipmentArray, state.gear.firearms);

  return returnUpdatedWeightAndEquipment(state, newTotalWeight, updatedEquipmentArray);
};
