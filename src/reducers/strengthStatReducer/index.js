export const modifyStrengthValueReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    str: action.payload } });
