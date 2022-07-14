import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

export const getFirearmNameAndRecoil = (weapon, skillLevel) => {
  if (!weapon) {
    return 'None';
  }

  return `${weapon.name} - recoil recovery: ${getRecoilRecoveryValue(weapon.kd, skillLevel)}`;
};

const getRifleWeightClass = (weight) => (weight < 11.2 ? 'light' : 'heavy');

const meleeNameList = {
  pistols: 'Pistol',
  smgs: 'SMG',
  light: 'Light Rifle',
  heavy: 'Heavy Rifle',
  rifles: true,
  sniperRifles: true,
  shotguns: true,
};

const getFirearmForMeleeList = (firearmsArray) => {
  const filteredArray = firearmsArray.filter((gun) => meleeNameList[gun.list]);

  if (filteredArray[0] === undefined) {
    return [];
  }

  if (firearmsArray[0].name === 'Sawed-Off Shotgun') {
    return ['SMG'];
  }

  const tag = filteredArray[0].list === 'rifles' || filteredArray[0].list === 'sniperRifles' || filteredArray[0].list === 'shotguns'
    ? getRifleWeightClass(filteredArray[0].weight)
    : filteredArray[0].list;

  return [meleeNameList[tag]];
};

const getEquipmentForMeleeList = (equipmentArray) => {
  if (!equipmentArray) {
    return [];
  }

  return equipmentArray.reduce((arr, equipObj) => (equipObj.tags.includes('Melee') ? [...arr, ...equipObj.melee] : [...arr]), []);
};

export const prepareHandToHandWeaponList = (
  firearmsArray, equipmentArray, limit,
) => Array.from(new Set([...getFirearmForMeleeList(firearmsArray),
  ...getEquipmentForMeleeList(equipmentArray)])).slice(0, limit);
