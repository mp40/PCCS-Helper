import { removeObjectFromArray, calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../reducerHelpers';

export const removeEquipmentReducer = (state, action) => {
  const newEquipmentArray = removeObjectFromArray(state.gear.equipment, action.payload);
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, newEquipmentArray, state.gear.firearms);

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      equipment: [...newEquipmentArray] } };
};
