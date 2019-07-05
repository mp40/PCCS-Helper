import { calculateTotalWeight } from '../../helpers/actionHelpers';

const removeKeyFromFirearm = firearm => Object.keys(firearm).reduce((object, key) => {
  const objectToReturn = object;
  if (key !== 'modNotes') {
    objectToReturn[key] = firearm[key];
  }
  return objectToReturn;
}, {});

const removeCustomMagazines = magazineArray => magazineArray.filter(element => element.custom === undefined);

export const removeModificationWeight = (gunWeight, modifications) => {
  if (modifications === undefined || modifications === null) {
    return gunWeight;
  }
  return modifications.reduce((accumulator, mod) => accumulator - mod.weightMod, gunWeight);
};

export const removeAllFirearmModificationsReducer = (state, action) => {
  const newFirearmsArray = state.gear.firearms.map((element) => {
    let gun = element;
    if (gun.name === action.payload) {
      gun.weight = removeModificationWeight(gun.weight, gun.modNotes);
      gun.weight -= gun.mag[0].weight;
      gun = removeKeyFromFirearm(gun);
      gun.mag = removeCustomMagazines(gun.mag);
      gun.weight = Math.round((gun.weight + gun.mag[0].weight) * 1000) / 1000;
    }

    return gun;
  });

  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmsArray);

  return { ...state,
    totalWeight: Math.round(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: newFirearmsArray } };
};
