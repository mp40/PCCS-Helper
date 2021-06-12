import { getFullFirearmSystemWeightByObject, getAmmoWeight } from '../data/firearms';
import { getLauncherByName } from '../data/firearms/launchers';
import { correctFloatingPoint } from '../utils';

const getFirearmAndSpareAmmoWeight = (firearm) => {
  const firearmWeight = getFullFirearmSystemWeightByObject(firearm) * firearm.qty;
  const ammoWeight = firearm.mag.reduce((acc, mag) => acc + (mag.qty * mag.weight), 0);

  let grenadeWeight = 0;
  const grenadeLauncher = getLauncherByName(firearm?.launcher?.attached);

  if (grenadeLauncher) {
    const { weight } = grenadeLauncher.mag[0];
    grenadeWeight = firearm.launcher.mag.reduce((acc, mag) => acc + (mag.qty * weight), 0);
  }

  return firearmWeight + ammoWeight + grenadeWeight;
};

export const selectTotalWeightOfFirearms = (state) => {
  const firearms = [...state.currentCharacter.firearms];

  const weight = firearms.reduce((acc, firearm) => acc + getFirearmAndSpareAmmoWeight(firearm), 0);

  return correctFloatingPoint(weight);
};
