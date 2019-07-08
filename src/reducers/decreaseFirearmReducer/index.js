import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const decreaseFirearmReducer = (state, action) => {
  const newFirearmArray = state.gear.firearms.map((element) => {
    const firearmObject = element;
    if (firearmObject.name === action.payload.name) {
      firearmObject.qty -= 1;
    }
    return firearmObject;
  });

  const newTotalWeight = state.totalWeight - action.payload.weight;

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
