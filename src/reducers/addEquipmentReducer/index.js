import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const addEquipmentReducer = (state, action) => {
  const newTotalWeight = state.totalWeight + action.payload.weight;
  return returnUpdatedWeightAndEquipment(state, newTotalWeight, [...state.gear.equipment, action.payload]);
};
