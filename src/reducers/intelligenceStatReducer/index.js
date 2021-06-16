export const modifyIntelligenceValueReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    int: action.payload } });
