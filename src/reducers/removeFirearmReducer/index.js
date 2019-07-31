import { removeObjectFromArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';

export const removeFirearmReducer = (state, action) => {
  const newFirearmArray = removeObjectFromArray(state.gear.firearms, action.payload);

  return returnUpdatedWeightAndFirearms(state, newFirearmArray);
};
