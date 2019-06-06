import { uniformWeights } from '../data/uniformAndArmourTypes';

export const addEquipment = (oldWeight, oldArray, equipObj) => {
  const newEquipObj = equipObj;
  newEquipObj.qty = 1;
  const newWeight = (oldWeight + equipObj.weight);
  const newArray = [...oldArray, newEquipObj];
  return {
    totalWeight: Math.round(newWeight * 1000) / 1000,
    equipArray: newArray,
  };
};

export const removeEquipment = (oldWeight, oldArray, equipObj) => {
  const newWeight = oldWeight - (equipObj.weight * equipObj.qty);
  const newArray = oldArray.filter(obj => obj.name !== equipObj.name);
  return {
    totalWeight: Math.round(newWeight * 1000) / 1000,
    equipArray: newArray,
  };
};

export const removeAllEquipment = (oldWeight, oldArray) => {
  const equipmentWeight = oldArray.reduce((sum, obj) => sum + (obj.weight * obj.qty), 0);
  return Math.round((oldWeight - equipmentWeight) * 1000) / 1000;
};

export const incrementEquipmentQty = (oldWeight, oldArray, equipObj, modifier) => {
  const newArray = oldArray.map((obj) => {
    const newObj = obj;
    if (obj.name === equipObj.name) {
      newObj.qty += modifier;
    }
    return newObj;
  });
  let newWeight = oldWeight;
  newWeight += (equipObj.weight * modifier);

  return {
    totalWeight: Math.round(newWeight * 1000) / 1000,
    equipArray: newArray,
  };
};

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
    return;
  }
  const totalWeight = gunArray.reduce((accumulator, gunObj) => accumulator + calculateGunAndAmmoWeight(gunObj), 0);
  return Math.round(totalWeight * 1000) / 1000;
};

export const calculateObjectWeightDifference = (obj, modifier) => {
  const oldWeight = obj.qty * obj.weight;
  const newWeight = (obj.qty + modifier) * obj.weight;
  return Math.round((newWeight - oldWeight) * 1000) / 1000;
};

export const modifyObjectQtyInArray = (array, obj, modifier = 0) => array.map((element) => {
  const newElement = element;
  if (element.name && element.name === obj.name) {
    newElement.qty += modifier;
  }
  if (element.cap && element.cap === obj.cap) {
    newElement.qty += modifier;
  }
  return newElement;
});

export const removeObjectFromArray = (array, obj) => array.filter(element => element.name && element.name !== obj.name);

export const findUniformWeight = uniform => uniformWeights[uniform];

export const findEquipmentWeight = equipment => equipment.reduce((sum, obj) => sum + obj.weight * obj.qty, 0);

export const calculateTotalWeight = (uniform, equipment, firearms) => findUniformWeight(uniform) + findEquipmentWeight(equipment) + calculateFirearmsArrayWeight(firearms);
