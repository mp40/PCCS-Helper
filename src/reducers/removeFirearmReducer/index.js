import { removeObjectFromArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const removeFirearmReducer = (state, action) => returnUpdatedWeightAndFirearms(
  state,
  removeObjectFromArray(state.gear.firearms, action.payload),
);
