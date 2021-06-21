export const changeVestReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    vest: action.payload } });
