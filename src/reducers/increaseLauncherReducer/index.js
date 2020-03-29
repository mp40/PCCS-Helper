import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const increaseLauncherReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, 1, 'launchers');
