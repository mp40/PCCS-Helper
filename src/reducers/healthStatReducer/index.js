export const modifyHealthValueReducer = (state, action) => (
  { ...state,
    currentCharacter: { ...state.currentCharacter,
      hlt: action.payload } });
