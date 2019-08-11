import { returnUpdatedWeightAndGrenades } from '../reducerHelpers';

export const addGrenadeReducer = (
  state, action,
) => returnUpdatedWeightAndGrenades(state, [...state.gear.grenades, action.payload]);
