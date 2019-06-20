export const isValidCombatLevel = payload => payload >= 0;

export const isValidAttributeStat = payload => payload >= 3 && payload <= 19;

export const isNotValidEquipmentToAdd = (list, equipment) => list.filter(obj => obj.name === equipment.name).length;

export const isValidCustomEquipmentInput = (name, weight) => {
  if (!name || name.length < 1 || typeof name !== 'string') {
    return false;
  }
  if (Number.isNaN(weight) || weight <= 0 || typeof weight !== 'number') {
    return false;
  }
  return true;
};
