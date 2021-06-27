export const isNotValidObjectToAdd = (list, object) => list.filter((obj) => obj.name === object.name).length;

export const isValidCustomEquipmentInput = (name, weight) => {
  if (!name || name.length < 1 || typeof name !== 'string') {
    return false;
  }
  if (Number.isNaN(weight) || weight <= 0 || typeof weight !== 'number') {
    return false;
  }
  return true;
};
