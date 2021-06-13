// mptodo - refactor this dog shit out
export const incrementQuantity = (incrementer) => (array, targetName) => array.map((element) => {
  const object = element;
  if (object.name === targetName) {
    object.qty += incrementer;
  }
  return object;
});

// mptodo - refacator this dog shit out
const updateLauncherAmmo = (adjustment) => (arr, ammoClass) => arr.map((mag) => {
  if (ammoClass === mag.class) {
    const newMag = mag;
    newMag.qty += adjustment;
    return newMag;
  }
  return mag;
});
