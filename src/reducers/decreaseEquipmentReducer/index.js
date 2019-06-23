export const decreaseEquipmentReducer = (state, action) => {
  const equipmentArray = state.gear.equipment.map((element) => {
    const equipmentObject = element;
    if (equipmentObject.name === action.payload.name) {
      equipmentObject.qty -= 1;
    }
    return equipmentObject;
  });

  const newWeight = state.totalWeight - action.payload.weight;

  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      equipment: [...equipmentArray] } };
};
