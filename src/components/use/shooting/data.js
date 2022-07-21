export const defaultSituationState = Object.freeze({
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
});

const defaultVisibilityState = Object.freeze({
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
});

export const initialState = Object.freeze({
  range: 50,
  aims: 1,
  stance: 'Standing',
  target: 'Standing Exposed',
  movement: { shooter: 0, target: 0 },
  situation: { ...defaultSituationState },
  visibility: { ...defaultVisibilityState },
  miscellaneous: 0,
});

export const targetSizeMods = Object.freeze({
  'Look Over/Around': { size: -4, elev: -3, width: -3 },
  'Fire Over/Around': { size: 0, elev: 2, width: 2 },
  'Standing Exposed': { size: 7, elev: 14, width: 1 },
  'Kneeling Exposed': { size: 6, elev: 11, width: 3 },
  'Prone/Crawl': { size: 2, elev: 2, width: 2 },
  Running: { size: 8, elev: 14, width: 1 },
  'Low Crouch': { size: 7, elev: 11, width: 2 },
  'Hands and Knees': { size: 6, elev: 8, width: 1 },
  'Low Prone': { size: 1, elev: 0, width: 5 },
});

export const expandedTargetSizeMods = {
  ...targetSizeMods,
  'Hex - indirect': { size: 12 },
};

export const directFireSizes = Object.keys(targetSizeMods);
export const indirectFireSizes = ['Hex - indirect', ...directFireSizes];
