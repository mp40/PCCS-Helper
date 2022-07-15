import { getRecoilRecoveryValue } from '../../data/advancedRules/recoilRecovery';

export const getFirearmNameAndRecoil = (weapon, skillLevel) => {
  if (!weapon) {
    return 'None';
  }

  return `${weapon.name} - recoil recovery: ${getRecoilRecoveryValue(weapon.kd, skillLevel)}`;
};
