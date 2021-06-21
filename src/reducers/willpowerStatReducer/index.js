export const modifyWillpowerValueReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    wil: action.payload } });
