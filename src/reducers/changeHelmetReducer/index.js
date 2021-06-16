export const changeHelmetReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    helmet: action.payload } });
