import { correctFloatingPoint } from '../reducerHelpers';

export const addFirearmReducer = (state, action) => {
  const newTotalWeight = state.totalWeight + action.payload.weight;

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      firearms: [...state.gear.firearms, action.payload] } };
};
