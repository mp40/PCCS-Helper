import { correctFloatingPoint } from '../reducerHelpers';

export const addEquipmentReducer = (state, action) => {
  const newTotalWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      equipment: [...state.gear.equipment, action.payload] } };
};
