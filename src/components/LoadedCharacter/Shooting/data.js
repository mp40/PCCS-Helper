import { getRangeBrackets } from '../../../data/firearms/rangeBrackets';

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

const oddsOfHitting = [
  {
    eal: 28,
    Single: 99,
    Auto: 99,
  },
  {
    eal: 27,
    Single: 98,
    Auto: 98,
  },
  {
    eal: 26,
    Single: 96,
    Auto: 98,
  },
  {
    eal: 25,
    Single: 94,
    Auto: 97,
  },
  {
    eal: 24,
    Single: 90,
    Auto: 95,
  },
  {
    eal: 23,
    Single: 86,
    Auto: 92,
  },
  {
    eal: 22,
    Single: 80,
    Auto: 90,
  },
  {
    eal: 21,
    Single: 74,
    Auto: 86,
  },
  {
    eal: 20,
    Single: 67,
    Auto: 82,
  },
  {
    eal: 19,
    Single: 60,
    Auto: 77,
  },
  {
    eal: 18,
    Single: 53,
    Auto: 73,
  },
  {
    eal: 17,
    Single: 46,
    Auto: 68,
  },
  {
    eal: 16,
    Single: 39,
    Auto: 62,
  },
  {
    eal: 15,
    Single: 33,
    Auto: 57,
  },
  {
    eal: 14,
    Single: 27,
    Auto: 52,
  },
  {
    eal: 13,
    Single: 22,
    Auto: 47,
  },
  {
    eal: 12,
    Single: 18,
    Auto: 43,
  },
  {
    eal: 11,
    Single: 15,
    Auto: 38,
  },
  {
    eal: 10,
    Single: 12,
    Auto: 34,
  },
  {
    eal: 9,
    Single: 9,
    Auto: 31,
  },
  {
    eal: 8,
    Single: 7,
    Auto: 27,
  },
  {
    eal: 7,
    Single: 6,
    Auto: 24,
  },
  {
    eal: 6,
    Single: 5,
    Auto: 21,
  },
  {
    eal: 5,
    Single: 4,
    Auto: 19,
  },
  {
    eal: 4,
    Single: 3,
    Auto: 17,
  },
  {
    eal: 3,
    Single: 2,
    Auto: 15,
  },
  {
    eal: 2,
    Single: 2,
    Auto: 13,
  },
  {
    eal: 1,
    Single: 1,
    Auto: 11,
  },
  {
    eal: 0,
    Single: 1,
    Auto: 10,
  },
  {
    eal: -1,
    Single: 1,
    Auto: 9,
  },
  {
    eal: -2,
    Single: 0,
    Auto: 8,
  },
  {
    eal: -3,
    Single: false,
    Auto: 7,
  },
  {
    eal: -4,
    Single: false,
    Auto: 6,
  },
  {
    eal: -5,
    Single: false,
    Auto: 6,
  },
  {
    eal: -6,
    Single: false,
    Auto: 4,
  },
  {
    eal: -8,
    Single: false,
    Auto: 3,
  },
  {
    eal: -10,
    Single: false,
    Auto: 2,
  },
  {
    eal: -15,
    Single: false,
    Auto: 1,
  },
  {
    eal: -17,
    Single: false,
    Auto: 0,
  },
  {
    eal: -22,
    Single: false,
    Auto: false,
  },
];

export const shooterStance = {
  Standing: 0,
  Kneeling: 3,
  Prone: 6,
};

export const defaultSituationState = {
  braced: false,
  slingSupport: false,
  hipFire: false,
  rifleOneHand: false,
  smgOneHand: false,
  pistolOneHand: false,
  foldingStockNotUsed: false,
  pistolDoubleAction: false,
  bipodNotBraced: false,
  bipodBraced: false,
  tripodMount: false,
  pintleMount: false,
  turretMount: false,
};

export const defaultVisibilityState = {
  lighting: 'Good',
  muzzleFlash: false,
  smokeFogHaze: false,
  lookingIntoLight: false,
  opticalUnder8: false,
  opticsBroken: false,
  aasBroken: false,
  sightsBroken: false,
  teargasNoMask: false,
  notLooking: false,
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

export const getOddsOfHitting = (alm, sizeMod, rof) => {
  const eal = alm + sizeMod;
  const rofType = rof === '3RB' ? 'Auto' : rof;

  if (eal >= 28) {
    return 99;
  }

  if (eal <= -22) {
    return 'NA';
  }

  let odds = false;

  for (let i = 1; i < oddsOfHitting.length; i += 1) {
    if (oddsOfHitting[i - 1].eal > eal || oddsOfHitting[i].eal === eal) {
      odds = oddsOfHitting[i][rofType];
    }

    if (oddsOfHitting[i].eal < eal) {
      break;
    }
  }

  return odds === false ? 'NA' : odds;
};

export const getWeaponRangeIndex = (list, range) => {
  const rangeBrackets = getRangeBrackets(list);

  let index;

  for (let i = 0; i < rangeBrackets.length; i += 1) {
    if (rangeBrackets[i] >= range) {
      index = i;
      break;
    }
  }

  return index;
};

export const getWeaponMaxRange = (list) => {
  const rangeBrackets = getRangeBrackets(list);

  return rangeBrackets[rangeBrackets.length - 1];
};
