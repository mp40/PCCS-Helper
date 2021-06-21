export const removeAllWeaponsReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    firearms: [],
    grenades: [],
    launchers: [] } });
