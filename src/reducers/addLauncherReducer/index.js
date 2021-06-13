export const addLauncherReducer = (state, action) => ({ ...state,
  currentCharacter: { ...state.currentCharacter,
    launchers: [...state.currentCharacter.launchers, action.payload] } });
