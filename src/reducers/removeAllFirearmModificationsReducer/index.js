import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { correctFloatingPoint, returnUpdatedWeightAndFirearms } from '../reducerHelpers';

const removeKeyFromFirearm = firearm => Object.keys(firearm).reduce((object, key) => {
  const objectToReturn = object;
  if (key !== 'modNotes') {
    objectToReturn[key] = firearm[key];
  }
  return objectToReturn;
}, {});

export const removeCustomMagazines = magazineArray => magazineArray.filter(element => element.custom === undefined);

export const removeModificationWeight = (gunWeight, modifications) => {
  if (modifications === undefined || modifications === null) {
    return gunWeight;
  }
  return modifications.reduce((accumulator, mod) => accumulator - mod.weightMod, gunWeight);
};

export const removeAllFirearmModificationsReducer = (state, action) => {
  const newFirearmArray = state.gear.firearms.map((element) => {
    let gun = element;
    if (gun.name === action.payload) {
      gun.weight = removeModificationWeight(gun.weight, gun.modNotes);
      gun.weight -= gun.mag[0].weight;
      gun = removeKeyFromFirearm(gun);
      gun.mag = removeCustomMagazines(gun.mag);
      gun.weight = correctFloatingPoint(gun.weight + gun.mag[0].weight);
    }
    return gun;
  });

  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmArray);

  return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
};
