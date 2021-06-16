export const changeUniformReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    uniform: action.payload } });
