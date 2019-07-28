export const isValidCombatLevel = payload => payload >= 0 && payload <= 20;

export const isValidAttributeStat = payload => payload >= 3 && payload <= 19;

export const isNotValidObjectToAdd = (list, object) => list.filter(obj => obj.name === object.name).length;

export const isValidCustomEquipmentInput = (name, weight) => {
  if (!name || name.length < 1 || typeof name !== 'string') {
    return false;
  }
  if (Number.isNaN(weight) || weight <= 0 || typeof weight !== 'number') {
    return false;
  }
  return true;
};

export const isValidToDecreaseQantity = equipment => (equipment.qty > 1);

export const isValidToDecreaseMagazine = magazine => (magazine.qty > 0);

export const isValid = (object) => {
  if (object.magazine) {
    return isValidToDecreaseMagazine(object.magazine);
  }
  return isValidToDecreaseQantity(object);
};

export const handleIncrement = (object, increment, actionUp, actionDown) => {
  if (increment === 'up') {
    actionUp(object);
  }
  if (increment === 'down' && isValid(object)) {
    actionDown(object);
  }
};
