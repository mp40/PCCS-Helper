import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const decreaseFirearmReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, -1, 'firearms');
