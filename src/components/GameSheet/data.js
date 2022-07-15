import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';
import { parseFirearmsForMelee } from '../../helpers/melee';

export const getFirearmNameAndRecoil = (weapon, skillLevel) => {
  if (!weapon) {
    return 'None';
  }

  return `${weapon.name} - recoil recovery: ${getRecoilRecoveryValue(weapon.kd, skillLevel)}`;
};

const getEquipmentForMeleeList = (equipmentArray) => {
  if (!equipmentArray) {
    return [];
  }

  return equipmentArray.reduce((arr, equipObj) => (equipObj.tags.includes('Melee') ? [...arr, ...equipObj.melee] : [...arr]), []);
};

export const prepareHandToHandWeaponList = (
  firearmsArray, equipmentArray,
) => [
  ...parseFirearmsForMelee(firearmsArray),
  ...getEquipmentForMeleeList(equipmentArray),
];
