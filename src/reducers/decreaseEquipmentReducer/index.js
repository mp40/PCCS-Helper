import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const decreaseEquipmentReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, -1, 'equipment');
