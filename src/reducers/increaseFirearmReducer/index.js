import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const increaseFirearmReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, 1, 'firearms');
