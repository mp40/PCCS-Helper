import { removeObjectFromArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const removeEquipmentReducer = (state, action) => returnUpdatedWeightAndEquipment(
  state,
  removeObjectFromArray(state.gear.equipment, action.payload),
);
