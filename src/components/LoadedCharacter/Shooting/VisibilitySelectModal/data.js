export const lightingOptions = [
  'Full Moon', 'Half Moon', 'No Moon', 'Good', 'Dusk',
];

export const generic = [
  'muzzleFlash',
  'smokeFogHaze',
  'lookingIntoLight',
  'sightsBroken',
  'teargasNoMask',
  'notLooking',
];

const other = {
  muzzleFlash: 'Firing at Muzzle Flash',
  smokeFogHaze: 'Smoke, Haze, Fog',
  lookingIntoLight: 'Looking into Light',
  sightsBroken: 'Iron Sights Broken',
  teargasNoMask: 'Firing from Teargas, No Mask',
  notLooking: 'Shooter Not Looking',
};

// mptodo - add for firearms with optics, do min under x automatically
// const optics = ['opticalUnder8', 'opticsBroken', 'aasBroken'];

export const getOthers = (optic) => {
  if (!optic) {
    return other;
  }

  if (optic === 'AAS') {
    return { ...other, aasBroken: 'AAS Broken' };
  }

  return { ...other, opticsBroken: 'Optics Broken' };
};
