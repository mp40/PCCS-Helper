import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const increaseEquipmentReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, 1, 'equipment');
