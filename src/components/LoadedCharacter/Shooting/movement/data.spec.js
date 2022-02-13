import { findSpeedMods } from './data';

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
