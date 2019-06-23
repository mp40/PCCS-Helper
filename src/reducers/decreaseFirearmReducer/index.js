export const decreaseFirearmReducer = (state, action) => {
  const firearmArray = state.gear.firearms.map((element) => {
    const firearmObject = element;
    if (firearmObject.name === action.payload.name) {
      firearmObject.qty -= 1;
    }
    return firearmObject;
  });

  const newWeight = state.totalWeight - action.payload.weight;

  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...firearmArray] } };
};
