export const isValidCombatLevel = payload => payload >= 0;

export const isValidAttributeStat = payload => payload >= 3 && payload <= 19;

export const isNotValidEquipmentToAdd = (list, equipment) => list.filter(obj => obj.name === equipment.name).length;
