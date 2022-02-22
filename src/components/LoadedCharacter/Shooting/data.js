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
