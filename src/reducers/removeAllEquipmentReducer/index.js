import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const removeAllEquipmentReducer = (state, action) => returnUpdatedWeightAndEquipment(state, action.payload);
