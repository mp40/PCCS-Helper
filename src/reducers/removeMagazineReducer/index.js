import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';
import { calculateTotalWeight } from '../../helpers/actionHelpers';

const magToRemove = (
  payloadMagazine, element,
) => element.cap === payloadMagazine.cap && element.weight === payloadMagazine.weight;

export const filterOutCustom = (
  array, payloadMagazine,
) => array.filter(element => !magToRemove(payloadMagazine, element));

const hideNonCustom = (array, payloadMagazine) => array.map((element) => {
  const magazine = element;
  if (magToRemove(payloadMagazine, magazine)) {
    magazine.qty = 0;
    magazine.removed = true;
  }
  return magazine;
});

export const removeMagazineReducer = (state, action) => {
  const newFirearmArray = state.gear.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag = action.payload.magazine.custom
        ? filterOutCustom(gun.mag, action.payload.magazine)
        : hideNonCustom(gun.mag, action.payload.magazine);
    }
    return gun;
  });
  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmArray);

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
