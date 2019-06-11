export const modifyHealthValueReducer = (state, action) => (
  { ...state,
    characterStats:
        { ...state.characterStats, hlt: action.payload } });
