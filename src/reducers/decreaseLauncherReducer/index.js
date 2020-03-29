import { returnUpdatedWeightAndArray } from '../reducerHelpers';

export const decreaseLauncherReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, -1, 'launchers');
