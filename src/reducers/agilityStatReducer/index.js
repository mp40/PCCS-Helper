export const modifyAgilityValueReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    agi: action.payload } });
