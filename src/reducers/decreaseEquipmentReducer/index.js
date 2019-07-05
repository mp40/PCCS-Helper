import { correctFloatingPoint } from '../reducerHelpers';

export const decreaseEquipmentReducer = (state, action) => {
  const equipmentArray = state.gear.equipment.map((element) => {
    const equipmentObject = element;
    if (equipmentObject.name === action.payload.name) {
      equipmentObject.qty -= 1;
    }
    return equipmentObject;
  });

  const newTotalWeight = state.totalWeight - action.payload.weight;

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      equipment: [...equipmentArray] } };
};
