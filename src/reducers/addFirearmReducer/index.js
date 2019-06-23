export const addFirearmReducer = (state, action) => {
  const newWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...state.gear.firearms, action.payload] } };
};
