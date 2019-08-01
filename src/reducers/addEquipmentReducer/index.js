import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const addEquipmentReducer = (
  state, action,
) => returnUpdatedWeightAndEquipment(state, [...state.gear.equipment, action.payload]);
