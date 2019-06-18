import { calculateTotalWeight } from '../../helpers/actionHelpers';

export const removeAllEquipmentReducer = (state, action) => {
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, action.payload, state.gear.firearms);

  return { ...state,
    totalWeight: Math.floor(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      equipment: [...action.payload] } };
};
