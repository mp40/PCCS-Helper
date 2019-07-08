import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint, returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const removeAllFirearmsReducer = (state, action) => returnUpdatedWeightAndFirearms(
  state,
  correctFloatingPoint(calculateTotalWeight(state.gear.uniform, state.gear.equipment, action.payload)),
  action.payload,
);
