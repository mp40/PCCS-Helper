import { removeObjectFromArray, calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../reducerHelpers';

export const removeFirearmReducer = (state, action) => {
  const newFirearmArray = removeObjectFromArray(state.gear.firearms, action.payload);
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmArray);

  return { ...state,
    totalWeight: correctFloatingPoint(newTotalWeight),
    gear: { ...state.gear,
      firearms: [...newFirearmArray] } };
};
