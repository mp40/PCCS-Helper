import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';
import { calculateTotalWeight } from '../../helpers/actionHelpers';

export const removeMagazineReducer = (state, action) => {
  const newFirearmArray = state.gear.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag.filter((ele) => {
        const mag = ele;
        if (mag.cap === action.payload.magazine.cap && mag.weight === action.payload.magazine.weight) {
          mag.qty = 0;
          mag.removed = true;
        }
        // console.log('>>>', mag);
        console.log('XXXX', mag.custom !== true);
        return mag.custom !== true;
      });
    }
    console.log('LL>>', gun.mag);
    return gun;
  });
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmArray);

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
