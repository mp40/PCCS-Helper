const standardRangeBrackets = [10, 20, 40, 70, 100, 200, 300, 400];
const shotgunRangeBrackets = [1, 2, 4, 6, 8, 10, 15, 20, 30, 40, 80];
const launcherBalisticRangeBackets = [40, 100, 200, 400, '', 0, 1, 2, 3, 5, 10];

export const getRangeBrackets = (list) => {
  if (list === 'shotguns') {
    return shotgunRangeBrackets;
  }
  if (list === 'launchers') {
    return launcherBalisticRangeBackets;
  }
  return standardRangeBrackets;
};
