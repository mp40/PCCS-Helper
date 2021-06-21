export const addGrenadeReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    grenades: [...state.currentCharacter.grenades, { name: action.payload, qty: 1 }] } });
