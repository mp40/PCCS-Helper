const movementMods = {
  // Rg: [.5, 1, 2, 3, 4, 10] <- speed in array, * = no max aim
  ranges: [10, 20, 40, 70, 100, 200, 300],
  speeds: [0.5, 1, 2, 3, 4, 10],
  10: [-6, -8, -10, -10, -10, -10],
  20: [-5, -6, -8, -10, -10, -10],
  40: [-5, -5, -6, -7, -8, -10],
  70: [-5, -5, -5, -6, -6, -10],
  100: [-5, -5, -5, -5, -6, -8],
  200: [-5, -5, -5, -5, -5, -6],
  300: [-5, -5, -5, -5, -5, -5],
  noMax70: [true, false, false, false, false, false],
  noMax100: [true, true, false, false, false, false],
  noMax200: [true, true, true, false, false, false],
  noMax300: [true, true, true, true, false, false],
};

export const findSpeedMods = (combinedSpeed, range) => {
  if (combinedSpeed === 0) {
    return { mod: 0, noMax: true };
  }

  let rangeKey;
  let speedIndex;

  for (let i = 0; i < movementMods.ranges.length; i += 1) {
    rangeKey = movementMods.ranges[i];

    if (movementMods.ranges[i] > range) {
      break;
    }
  }

  for (let i = 0; i < movementMods.speeds.length; i += 1) {
    speedIndex = i;

    if (movementMods.speeds[i] > combinedSpeed) {
      break;
    }
  }

  const noMax = movementMods[`noMax${rangeKey}`] ? movementMods[`noMax${rangeKey}`][speedIndex] : false;

  const result = {
    mod: movementMods[rangeKey][speedIndex],
    noMax,
  };

  return result;
};
