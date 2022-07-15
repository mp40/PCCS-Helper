import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';
import { parseFirearmsForMelee, parseEquipmentForMelee } from '../../helpers/melee';

export const getFirearmNameAndRecoil = (weapon, skillLevel) => {
  if (!weapon) {
    return 'None';
  }

  return `${weapon.name} - recoil recovery: ${getRecoilRecoveryValue(weapon.kd, skillLevel)}`;
};

export const prepareHandToHandWeaponList = (
  firearmsArray, equipmentArray,
) => [
  ...parseFirearmsForMelee(firearmsArray),
  ...parseEquipmentForMelee(equipmentArray),
];
