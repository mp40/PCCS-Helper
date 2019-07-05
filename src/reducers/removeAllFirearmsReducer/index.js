import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../reducerHelpers';

export const removeAllFirearmsReducer = (state, action) => ({ ...state,
  totalWeight: correctFloatingPoint(calculateTotalWeight(state.gear.uniform, state.gear.equipment, action.payload)),
  gear: { ...state.gear,
    firearms: [...action.payload] } });
