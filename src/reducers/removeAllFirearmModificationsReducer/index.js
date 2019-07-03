import { calculateTotalWeight } from '../../helpers/actionHelpers';
import { findFirearmByName } from '../../helpers/testHelpers';
import { pistols, rifles, sniperRifles, mgs, smgs, shotguns } from '../../data/firearms';

const firearmsList = [...pistols(), ...rifles(), ...smgs(), ...mgs(), ...sniperRifles(), ...shotguns()];

export const removeAllFirearmModificationsReducer = (state, action) => {
  const newFirearmsArray = state.gear.firearms.map((element) => {
    let gun = element;
    if (gun.name === action.payload) {
      gun = findFirearmByName(firearmsList, action.payload);
    }

    return gun;
  });

  const newTotalWeight = calculateTotalWeight(state.gear.uniform, state.gear.equipment, newFirearmsArray);

  return { ...state,
    totalWeight: Math.round(newTotalWeight * 1000) / 1000,
    gear: { ...state.gear,
      firearms: newFirearmsArray } };
};
