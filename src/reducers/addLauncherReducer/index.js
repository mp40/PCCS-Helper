import { getLauncherMagByName } from '../../data/launchers';

export const addLauncherReducer = (state, action) => {
  const launcher = { name: action.payload,
    list: 'launchers',
    qty: 1,
    mag: getLauncherMagByName(action.payload) };

  return {
    ...state,
    currentCharacter: { ...state.currentCharacter,
      launchers: [...state.currentCharacter.launchers, launcher] },
  };
};
