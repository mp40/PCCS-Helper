export const modifyGunCombatLevelReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    gunLevel: action.payload } });
