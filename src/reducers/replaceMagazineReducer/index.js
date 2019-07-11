// import { returnUpdatedWeightAndFirearms } from '../reducerHelpers';
// import { calculateTotalWeight } from '../../helpers/actionHelpers';

// export const removeMagazineReducer = (state, action) => {
//   const newFirearmArray = state.gear.firearms.map((element) => {
//     const gun = element;
//     if (gun.name === action.payload.firearm) {
//       gun.mag.map((ele) => {
//         const mag = ele;
//         if (mag.cap === action.payload.magazine.cap && mag.weight === action.payload.magazine.weight) {
//           gun.weight -= mag.qty * mag.weight;
//           mag.qty = 0;
//           mag.removed = true;
//         }
//         return mag;
//       });
//     }
//     return gun;
//   });

//   const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, state.gear.firearms);

//   return returnUpdatedWeightAndFirearms(state, newTotalWeight, newFirearmArray);
// };

export const replaceMagazineReducer = (state, action) => {
  const updatedFirearmsArray = state.gear.firearms.map((element) => {
    const gun = element;
    if (gun.name === action.payload.firearm) {
      gun.mag.map((ele) => {
        const mag = ele;
        if (
          mag.removed === true
        && mag.cap === action.payload.magazine.cap
        && mag.weight === action.payload.magazine.weight
        ) {
          mag.removed = false;
        }
        return mag;
      });
    }
    return gun;
  });
  return { ...state,
    gear: { ...state.gear,
      firearms: updatedFirearmsArray } };
};
