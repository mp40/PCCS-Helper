import { uniformWeights } from '../data/uniformAndArmourTypes';

export const calculateAmmoWeight = (gunObj) => {
  const ammoWeight = gunObj.mag.reduce((accumulator, magObj) => accumulator + (magObj.weight * magObj.qty), 0);
  return Math.round(ammoWeight * 1000) / 1000;
};

export const calculateGunAndAmmoWeight = (gunObj) => {
  const ammoWeight = calculateAmmoWeight(gunObj);
  const gunWeight = gunObj.weight * gunObj.qty;
  return Math.round((ammoWeight + gunWeight) * 1000) / 1000;
};

export const calculateFirearmsArrayWeight = (gunArray) => {
  if (gunArray === undefined) {
    return null;
  }
  const totalWeight = gunArray.reduce((accumulator, gunObj) => accumulator + calculateGunAndAmmoWeight(gunObj), 0);
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
export const modifyObjectQtyInArray = (array, obj, modifier = 0) => array.map((element) => {
  let newElement = element;
  newElement = updateIfMatchesByName(newElement, obj);
  newElement.qty += updateIfMatchesByCapacity(newElement, obj.cap, modifier);
  return newElement;
});

export const removeObjectFromArray = (array, obj) => array.filter(
  (element) => element.name && element.name !== obj.name);

export const findUniformWeight = (uniform) => uniformWeights[uniform];

export const findEquipmentWeight = (equipment) => equipment.reduce((sum, obj) => sum + obj.weight * obj.qty, 0);

const calculateGrenadeArray = (grenades) => grenades.reduce((sum, obj) => sum + obj.weight * obj.qty, 0);

export const calculateTotalWeight = (gear) => {
  let totalWeight = findUniformWeight(gear.uniform)
  + findEquipmentWeight(gear.equipment)
  + calculateFirearmsArrayWeight(gear.firearms)
  + calculateGrenadeArray(gear.grenades);
  if (gear.helmet) {
    totalWeight += gear.helmet.weight;
  }
  if (gear.vest) {
    totalWeight += gear.vest.weight;
  }
  return totalWeight;
};
