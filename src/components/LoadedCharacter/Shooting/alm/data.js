export const rangeMods = {
  1: 33,
  2: 28,
  3: 25,
  4: 23,
  5: 22,
  6: 20,
  7: 19,
  8: 18,
  9: 17,
  11: 16,
  12: 15,
  14: 14,
  16: 13,
  19: 12,
  22: 11,
  25: 10,
  30: 9,
  35: 8,
  40: 7,
  45: 6,
  50: 5,
  65: 3,
  75: 2,
  85: 1,
  100: 0,
  115: -1,
  130: -2,
  150: -3,
  170: -4,
  200: -5,
  230: -6,
  250: -7,
  300: -8,
  350: -9,
  400: -10,
};

export const shooterStance = {
  Standing: 0,
  Kneeling: 3,
  Prone: 6,
};

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

export const targetSizeMods = {
  'Look Over/Around': { size: -4, elev: -3, width: -3 },
  'Fire Over/Around': { size: 0, elev: 2, width: 2 },
  'Standing Exposed': { size: 7, elev: 14, width: 1 },
  'Kneeling Exposed': { size: 6, elev: 11, width: 3 },
  'Prone/Crawl': { size: 2, elev: 2, width: 2 },
  Running: { size: 8, elev: 14, width: 1 },
  'Low Crouch': { size: 7, elev: 11, width: 2 },
  'Hands and Knees': { size: 6, elev: 8, width: 1 },
  'Low Prone': { size: 1, elev: 0, width: 5 },
};

const lightingALM = {
  Good: 0,
  Dusk: -2,
  'Full Moon': -4,
  'Half Moon': -6,
  'No Moon': -12,
};

const otherVisibilityALM = {
  muzzleFlash: -10,
  smokeFogHaze: -6,
  lookingIntoLight: -8,
  sightsBroken: -4,
  teargasNoMask: -8,
  notLooking: -14,
};

const brancedModifiers = {
  Standing: 4,
  Kneeling: 2,
  Prone: 1,
};

const situationModifiers = {
  hipFire: -6,
  rifleOneHand: -7,
  smgOneHand: -6,
  pistolOneHand: -4,
  foldingStockNotUsed: -4,
  pistolDoubleAction: -3,
  bipodNotBraced: -2,
  bipodBraced: 3,
  tripodMount: 5,
  pintleMount: 7,
  turretMount: 11,
};

export const getVisibilityALM = (state) => {
  const lighting = lightingALM[state.lighting];

  let otherPenalites = 0;

  Object.keys(state).forEach((key) => {
    if (state[key] === true) {
      otherPenalites += otherVisibilityALM[key];
    }
  });

  return lighting + otherPenalites;
};

export const getSituationALM = (state, stance, aimTime) => {
  let result = 0;

  if (state.braced) {
    result += brancedModifiers[stance];
  }

  if (aimTime > 7 && state.slingSupport) {
    result += 1;
  }

  Object.keys(situationModifiers).forEach((situation) => {
    if (state[situation]) {
      result += situationModifiers[situation];
    }
  });

  return result;
};

export const getAimTimeMod = (aimData, aims) => {
  let result = 1;

  for (let i = 0; i < aimData.ac.length; i += 1) {
    if (aimData.ac[i] <= aims) {
      result = aimData.mod[i];
    }
  }

  return result;
};
