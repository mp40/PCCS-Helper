import { removeObjectFromArray } from '../../helpers/actionHelpers';
import { returnUpdatedWeightAndEquipment } from '../reducerHelpers';

export const removeEquipmentReducer = (state, action) => {
  const updatedEquipmentArray = removeObjectFromArray(state.gear.equipment, action.payload);

  return returnUpdatedWeightAndEquipment(state, updatedEquipmentArray);
};
