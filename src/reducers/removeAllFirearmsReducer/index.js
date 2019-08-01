import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const removeAllFirearmsReducer = (state, action) => returnUpdatedWeightAndFirearms(
  state, action.payload,
);
