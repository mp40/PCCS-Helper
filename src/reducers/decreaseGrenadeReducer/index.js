import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const decreaseGrenadeReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, -1, 'grenades');
