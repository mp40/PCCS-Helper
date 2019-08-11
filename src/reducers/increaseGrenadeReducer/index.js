import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const increaseGrenadeReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, 1, 'grenades');
