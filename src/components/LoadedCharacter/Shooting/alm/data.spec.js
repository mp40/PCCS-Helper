import { findSpeedMods, getVisibilityALM, getSituationALM, getAimTimeMod } from './data';

describe('Movement Mods', () => {
  it('should return mod of 0 if combined speed is 0', () => {
    const combinedSpeed = 0;
    const range = null;
    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: 0, noMax: true });
  });

  it('should return mods if combined speed is 0.5 and range 10', () => {
    const combinedSpeed = 0.5;
    const range = 10;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -6, noMax: false });
  });

  it('should round up combined speed and range to 0.5 and 10', () => {
    const combinedSpeed = 0.2;
    const range = 5;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -6, noMax: false });
  });

  it('should find mods for range 300 speed 10', () => {
    const combinedSpeed = 10;
    const range = 300;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -5, noMax: false });
  });

  it('should round up range 201 speed 4.1 to 300 and 10', () => {
    const combinedSpeed = 4.1;
    const range = 201;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -5, noMax: false });
  });

  it('should get mods for range and speed that round up to 70 and 0.5', () => {
    const combinedSpeed = 0.1;
    const range = 69;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -5, noMax: true });
  });

  it('should get mods for range and speed that round up to 200 and 2', () => {
    const combinedSpeed = 1.1;
    const range = 101;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -5, noMax: true });
  });

  it('should get mods for range and speed that round up to 20 and 10', () => {
    const combinedSpeed = 6;
    const range = 15;

    expect(findSpeedMods(combinedSpeed, range)).toEqual({ mod: -10, noMax: false });
  });
});

describe('Visibility ALM Mods', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
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
  });

  it('should calculate Good lighting ALM', () => {
    expect(getVisibilityALM(defaultState)).toBe(0);
  });

  it('should calculate Dusk lighting ALM', () => {
    defaultState.lighting = 'Dusk';

    expect(getVisibilityALM(defaultState)).toBe(-2);
  });

  it('should calculate Full Moon lighting ALM', () => {
    defaultState.lighting = 'Full Moon';

    expect(getVisibilityALM(defaultState)).toBe(-4);
  });

  it('should calculate Half Moon lighting ALM', () => {
    defaultState.lighting = 'Half Moon';

    expect(getVisibilityALM(defaultState)).toBe(-6);
  });

  it('should calculate No Moon lighting ALM', () => {
    defaultState.lighting = 'No Moon';

    expect(getVisibilityALM(defaultState)).toBe(-12);
  });

  it('should calculate Muzzle Flash ALM penality', () => {
    defaultState.muzzleFlash = true;

    expect(getVisibilityALM(defaultState)).toBe(-10);
  });

  it('should calculate Smoke Haze Fog ALM penality', () => {
    defaultState.smokeFogHaze = true;

    expect(getVisibilityALM(defaultState)).toBe(-6);
  });

  it('should calculate Looking Into Light ALM penality', () => {
    defaultState.lookingIntoLight = true;

    expect(getVisibilityALM(defaultState)).toBe(-8);
  });

  it('should calculate Sights Broken ALM penality', () => {
    defaultState.sightsBroken = true;

    expect(getVisibilityALM(defaultState)).toBe(-4);
  });

  it('should calculate In Teargas ALM penality', () => {
    defaultState.teargasNoMask = true;

    expect(getVisibilityALM(defaultState)).toBe(-8);
  });

  it('should calculate In Not Looking ALM penality', () => {
    defaultState.notLooking = true;

    expect(getVisibilityALM(defaultState)).toBe(-14);
  });

  it('should calculate multiple situations', () => {
    defaultState.lighting = 'No Moon';
    defaultState.notLooking = true;
    defaultState.sightsBroken = true;

    const result = -12 + -14 + -4;
    expect(getVisibilityALM(defaultState)).toBe(result);
  });
});

describe('Calculating Situation ALM Mods', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
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
  });
  it('should return 0 if all situations are false', () => {
    expect(getSituationALM(defaultState)).toBe(0);
  });

  it('should return 4 if situation is branced and stance is Standing', () => {
    defaultState.braced = true;
    const stance = 'Standing';

    expect(getSituationALM(defaultState, stance)).toBe(4);
  });

  it('should return 2 if situation is branced and stance is Kneeling', () => {
    defaultState.braced = true;
    const stance = 'Kneeling';

    expect(getSituationALM(defaultState, stance)).toBe(2);
  });

  it('should return 1 if situation is branced and stance is Prone', () => {
    defaultState.braced = true;
    const stance = 'Prone';

    expect(getSituationALM(defaultState, stance)).toBe(1);
  });

  it('should return -2 if situation is bipodNotBraced', () => {
    defaultState.bipodNotBraced = true;
    const stance = 'Standing';

    expect(getSituationALM(defaultState, stance)).toBe(-2);
  });

  it('should return 3 if situation bipodBraced', () => {
    defaultState.bipodBraced = true;
    const stance = 'Standing';

    expect(getSituationALM(defaultState, stance)).toBe(3);
  });

  it('should return 1 if situation is slingSupport and Aim Time is greater than 7', () => {
    defaultState.slingSupport = true;
    const stance = 'Kneeling';
    const aimTime = 8;

    expect(getSituationALM(defaultState, stance, aimTime)).toBe(1);
  });

  it('should return 0 if situation is slingSupport and Aim Time is 7 or less', () => {
    defaultState.slingSupport = true;
    const stance = 'Kneeling';
    const aimTime = 7;

    expect(getSituationALM(defaultState, stance, aimTime)).toBe(0);
  });

  it('should calculate multiple situations', () => {
    defaultState.hipFire = true;
    defaultState.pistolOneHand = true;
    defaultState.pistolDoubleAction = true;
    const stance = 'Standing';

    expect(getSituationALM(defaultState, stance)).toBe(-13);
  });

  it('should calculate multiple situations which include braced', () => {
    defaultState.braced = true;
    defaultState.rifleOneHand = true;
    const stance = 'Kneeling';

    expect(getSituationALM(defaultState, stance)).toBe(-5);
  });

  it('should calculate multiple situations which include slingSupport with aimTime greater than 7', () => {
    defaultState.slingSupport = true;
    defaultState.foldingStockNotUsed = true;
    const stance = 'Kneeling';
    const aimTime = 8;

    expect(getSituationALM(defaultState, stance, aimTime)).toBe(-3);
  });
});

describe('Aim Mods', () => {
  const aimData = {
    ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    mod: [-24, -14, -10, -8, -6, -5, -4, -3, -2, -1, 0],
  };

  it('should return value for 1 aim', () => {
    const aims = 1;

    expect(getAimTimeMod(aimData, aims)).toBe(-24);
  });

  it('should return value for 2 aims', () => {
    const aims = 2;

    expect(getAimTimeMod(aimData, aims)).toBe(-14);
  });

  it('should return value for 10 aims', () => {
    const aims = 10;

    expect(getAimTimeMod(aimData, aims)).toBe(-1);
  });

  it('should return value for 11 aims', () => {
    const aims = 11;

    expect(getAimTimeMod(aimData, aims)).toBe(-1);
  });

  it('should return value for 12 aims', () => {
    const aims = 12;

    expect(getAimTimeMod(aimData, aims)).toBe(0);
  });

  it('should return value of highest possible aim if aim time exceeds firearms maximum', () => {
    const aims = 13;

    expect(getAimTimeMod(aimData, aims)).toBe(0);
  });
});
