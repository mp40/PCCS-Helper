export const removeAllWeaponsReducer = (state) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    firearms: [],
    grenades: [],
    launchers: [] } });
