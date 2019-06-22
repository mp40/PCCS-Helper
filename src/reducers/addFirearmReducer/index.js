export const addFirearmReducer = (state, action) => {
  const newWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: Math.floor(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...state.gear.firearms, action.payload] } };
};
