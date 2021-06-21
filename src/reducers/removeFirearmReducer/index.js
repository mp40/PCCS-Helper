export const removeFirearmReducer = (state, action) => {
  const newFirearms = state.currentCharacter.firearms.filter((gun) => gun.name !== action.payload,
  );

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearms } };
};
