export const modifyFirearmReducer = (state, action) => {
  const newWeight = state.totalWeight + action.payload.modification.weight.weightMod;

  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    if (element.name === action.payload.firearm) {
      const element = modifiedFirearm;
      modifiedFirearm.modNotes = action.payload.modification;
      return modifiedFirearm;
    }
    return element;
  });


  return { ...state,
    totalWeight: Math.round(newWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: [...firearmArray] } };
};

// import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';

// export const increaseMagazineReducer = (state, action) => {
//   const newGunObj = action.payload.firearm;

//   newGunObj.mag = modifyObjectQtyInArray(newGunObj.mag, action.payload.magazine, 1);
//   const newGunArray = modifyObjectQtyInArray(state.gear.firearms, newGunObj);

//   const newWeight = state.totalWeight + action.payload.magazine.weight;

//   return { ...state,
//     totalWeight: Math.round(newWeight * 1000) / 1000,
//     gear: { ...state.gear,
//       firearms: [...newGunArray] } };
// };
