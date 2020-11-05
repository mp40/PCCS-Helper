export const changeNameReducer = (state, action) => ({ ...state,
  currentCharacter: {
    ...state.currentCharacter,
    name: action.payload,
  } });
