import { correctFloatingPoint } from '../reducerHelpers';

const getPrimaryMagazine = (magazineArray, indexOfPrimary) => magazineArray.splice(indexOfPrimary, 1)[0];

export const setPrimaryMagazineReducer = (state, action) => {
  const newFirearmsArray = state.currentCharacter.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.weight -= gun.mag[0].weight;
      const primaryMag = getPrimaryMagazine(gun.mag, action.payload.magazine);
      gun.mag.unshift(primaryMag);
      gun.weight = correctFloatingPoint(gun.weight + gun.mag[0].weight);
    }
    return gun;
  });

  // console.log('state', state.currentCharacter.firearms[0]);
  // console.log('new', newFirearmsArray[0]);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
