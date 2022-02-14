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

const defaultSituationState = {
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

const defaultVisibilityState = {
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

export const initialState = {
  range: 50,
  aims: 1,
  stance: 'Standing',
  target: 'Standing Exposed',
  movement: { shooter: 0, target: 0 },
  situation: defaultSituationState,
  visibility: defaultVisibilityState,
  miscellaneous: 0,
};
