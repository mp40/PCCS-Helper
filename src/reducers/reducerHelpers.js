export const correctFloatingPoint = (number) => Math.round(number * 1000) / 1000;

export const incrementQuantity = (incrementer) => (array, targetName) => array.map((element) => {
  const object = element;
  if (object.name === targetName) {
    object.qty += incrementer;
  }
  return object;
});

const updateLauncherAmmo = (adjustment) => (arr, ammoClass) => arr.map((mag) => {
  if (ammoClass === mag.class) {
    const newMag = mag;
    newMag.qty += adjustment;
    return newMag;
  }
  return mag;
});

export const increaseLauncherAmmo = updateLauncherAmmo(1);
export const decreaseLauncherAmmo = updateLauncherAmmo(-1);
