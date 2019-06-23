import { calculateTotalWeight } from '../../helpers/actionHelpers';

export const removeAllFirearmsReducer = (state, action) => {
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, action.payload);

  return { ...state,
    totalWeight: Math.floor(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...action.payload] } };
};
