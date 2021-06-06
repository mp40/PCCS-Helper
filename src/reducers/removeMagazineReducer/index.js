// import { correctFloatingPoint } from '../../utils';
// import { calculateTotalWeight } from '../../helpers/actionHelpers';

export const removeMagazineReducer = (state, action) => {
  const { firearmToUpdate, magazineIndex } = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      const updatedMag = [...gun.mag];
      if (updatedMag[magazineIndex].custom) {
        updatedMag.splice(magazineIndex, 1);
      } else {
        updatedMag[magazineIndex].qty = 0;
        updatedMag[magazineIndex].removed = true;
      }
      return { ...gun, mag: updatedMag };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
