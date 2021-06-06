import { uniformWeights } from '../data/uniformAndArmourTypes';

// mptodo - a lot of this needs to go

export const calculateAmmoWeight = (weapon) => {
  if (weapon.mag[0].weight === '-') {
    return 0;
  }
  const ammoWeight = weapon.mag.reduce((accumulator, magObj) => accumulator + (magObj.weight * magObj.qty), 0);
  return Math.round(ammoWeight * 1000) / 1000;
};

// mptodo refactor away
export const calculateWeaponAndAmmoWeight = (weapon) => {
  const ammoWeight = calculateAmmoWeight(weapon);
  const weaponWeight = weapon.weight * weapon.qty;
  return Math.round((ammoWeight + weaponWeight) * 1000) / 1000;
};

export const calculateWeaponArrayWeight = (gunArray) => {
  if (gunArray === undefined) {
    return null;
  }
  const totalWeight = gunArray.reduce((accumulator, gunObj) => accumulator + calculateWeaponAndAmmoWeight(gunObj), 0);
  return Math.round(totalWeight * 1000) / 1000;
};

export const calculateObjectWeightDifference = (obj, modifier) => {
  const oldWeight = obj.qty * obj.weight;
  const newWeight = (obj.qty + modifier) * obj.weight;
  return Math.round((newWeight - oldWeight) * 1000) / 1000;
};

const updateIfMatchesByName = (element, object) => (element.name && element.name === object.name ? object : element);
const updateIfMatchesByCapacity = (
  element,
  capacity,
  modifier,
) => (element.cap && element.cap === capacity ? modifier : 0);

// mptodo - refactor this dog shit out
export const modifyObjectQtyInArray = (array, obj, modifier = 0) => array.map((element) => {
  let newElement = element;
  newElement = updateIfMatchesByName(newElement, obj);
  newElement.qty += updateIfMatchesByCapacity(newElement, obj.cap, modifier);
  return newElement;
});

// mptodo get rid off this
export const removeObjectFromArray = (array, obj) => array.filter(
  (element) => element.name && element.name !== obj.name);

export const findEquipmentWeight = (equipment) => equipment.reduce((sum, obj) => sum + obj.weight * obj.qty, 0);

const calculateGrenadeArray = (grenades) => grenades.reduce((sum, obj) => sum + obj.weight * obj.qty, 0);

export const calculateTotalWeight = (gear) => {
  let totalWeight = uniformWeights[gear.uniform]
  + findEquipmentWeight(gear.equipment)
  + calculateWeaponArrayWeight([...gear.firearms, ...gear.launchers])
  + calculateGrenadeArray(gear.grenades);
  if (gear.helmet) {
    totalWeight += gear.helmet.weight;
  }
  if (gear.vest) {
    totalWeight += gear.vest.weight;
  }
  return totalWeight;
};
