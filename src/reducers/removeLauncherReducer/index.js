export const removeLauncherReducer = (state, action) => {
  const newLaunchers = state.currentCharacter.launchers.filter((launcher) => launcher.name !== action.payload);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      launchers: newLaunchers } };
};
