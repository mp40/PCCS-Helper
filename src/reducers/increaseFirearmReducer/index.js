import { correctFloatingPoint } from '../reducerHelpers';

export const increaseFirearmReducer = (state, action) => {
  const firearmArray = state.gear.firearms.map((element) => {
    const firearmObject = element;
    if (firearmObject.name === action.payload.name) {
      firearmObject.qty += 1;
    }
    return firearmObject;
  });

  const newTotalWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      firearms: [...firearmArray] } };
};
