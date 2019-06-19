import { removeObjectFromArray, calculateTotalWeight } from '../../helpers/actionHelpers';

export const removeEquipmentReducer = (state, action) => {
  const newEquipmentArray = removeObjectFromArray(state.gear.equipment, action.payload);
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, newEquipmentArray, state.gear.firearms);

  return { ...state,
    totalWeight: Math.floor(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      equipment: [...newEquipmentArray] } };
};
