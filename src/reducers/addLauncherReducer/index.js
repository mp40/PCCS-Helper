import { returnUpdatedWeightAndLaunchers } from '../reducerHelpers';

export const addLauncherReducer = (
  state, action,
) => returnUpdatedWeightAndLaunchers(state, [...state.gear.launchers, action.payload]);
