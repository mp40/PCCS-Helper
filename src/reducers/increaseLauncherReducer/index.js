export const increaseLauncherReducer = (state, action) => {
  const newLaunchers = state.currentCharacter.launchers.map((launcher) => {
    if (launcher.name === action.payload) {
      return { ...launcher, qty: launcher.qty + 1 };
    }

    return launcher;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      launchers: newLaunchers } };
};
