import { returnUpdatedWeightAndFirearms, updateQuantityOfFirearm, returnUpdatedWeightAndArray } from '../reducerHelpers';

// export const decreaseFirearmReducer = (state, action) => {
//   const newFirearmArray = updateQuantityOfFirearm(state.gear.firearms, action.payload.name, -1);
//   const newTotalWeight = state.totalWeight - action.payload.weight;

//   return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
// };

export const decreaseFirearmReducer = (state, action) => returnUpdatedWeightAndArray(state, action.payload, -1, 'firearms');
