import { getLauncherByName } from '../../data/firearms/launchers';

export const updateUnderslungLauncherReducer = (state, action) => {
  const { firearmToUpdate, launcher } = action.payload;

  const newFirearmsArray = state.currentCharacter.firearms.map((gun) => {
    if (gun.name === firearmToUpdate) {
      const magLength = getLauncherByName(launcher).mag.length;
      const mag = [];

      for (let i = 0; i < magLength; i += 1) {
        mag.push({ qty: 0 });
      }

      return { ...gun, launcher: { attached: launcher, mag } };
    }

    return gun;
  });

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      firearms: newFirearmsArray } };
};
