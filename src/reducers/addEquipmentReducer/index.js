
export const addEquipmentReducer = (state, action) => {
  const newWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: Math.floor(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      equipment: [...state.gear.equipment, action.payload] } };
};
