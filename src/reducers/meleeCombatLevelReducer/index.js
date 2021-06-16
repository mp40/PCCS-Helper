export const modifyMeleeCombatLevelReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    handLevel: action.payload } });
