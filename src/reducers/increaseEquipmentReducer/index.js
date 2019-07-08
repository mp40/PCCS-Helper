import { returnUpdatedWeightAndEquipment, updateQuantityOfEquipment } from '../reducerHelpers';

export const increaseEquipmentReducer = (state, action) => {
  const updatedEquipmentArray = updateQuantityOfEquipment(state.gear.equipment, action.payload.name, 1);
  const newTotalWeight = state.totalWeight + action.payload.weight;

  return returnUpdatedWeightAndEquipment(state, newTotalWeight, updatedEquipmentArray);
};
