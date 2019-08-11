import { removeObjectFromArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndGrenades } from '../reducerHelpers';

export const removeGrenadeReducer = (state, action) => returnUpdatedWeightAndGrenades(
  state,
  removeObjectFromArray(state.gear.grenades, action.payload),
);
