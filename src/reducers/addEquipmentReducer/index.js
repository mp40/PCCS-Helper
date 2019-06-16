
export const addEquipmentReducer = (state, action) => {
  const newWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: newWeight,
    gear: { ...state.gear,
      equipment: [...state.gear.equipment, action.payload] } };
};
