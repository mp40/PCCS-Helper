import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../reducerHelpers';

export const removeAllEquipmentReducer = (state, action) => {
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, action.payload, state.gear.firearms);

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      equipment: [...action.payload] } };
};
