import { hydrateFirearmByName } from '../../data/firearms/hydrate';

export const addFirearmReducer = (state, action) => {
  const firearm = hydrateFirearmByName(action.payload);
  firearm.qty = 1;
  firearm.modNotes = [];

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: [...state.currentCharacter.firearms, firearm] } };
};
