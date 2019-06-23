import { removeObjectFromArray, calculateTotalWeight } from '../../helpers/actionHelpers';

export const removeFirearmReducer = (state, action) => {
  const newFirearmArray = removeObjectFromArray(state.gear.firearms, action.payload);
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmArray);

  return { ...state,
    totalWeight: Math.round(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...newFirearmArray] } };
};
