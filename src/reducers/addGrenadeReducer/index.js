export const addGrenadeReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    grenades: [...state.currentCharacter.grenades, action.payload] } });
