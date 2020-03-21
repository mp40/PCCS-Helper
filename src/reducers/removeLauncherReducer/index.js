import { removeObjectFromArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndLaunchers } from '../reducerHelpers';

export const removeLauncherReducer = (state, action) => returnUpdatedWeightAndLaunchers(
  state,
  removeObjectFromArray(state.gear.launchers, action.payload),
);
