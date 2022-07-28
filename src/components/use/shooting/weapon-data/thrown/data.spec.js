import { getGrenadeTof } from './data';

describe('Getting Grenade TOF', () => {
  it('should return 2.3 for range 7 and less', () => {
    const range = 7;

    expect(getGrenadeTof(range)).toBe(2.3);
  });

  it('should return 4.3 for range 18 and less', () => {
    const range = 18;

    expect(getGrenadeTof(range)).toBe(4.3);
  });

  it('should return 6.3 for range 35 and less', () => {
    const range = 35;

    expect(getGrenadeTof(range)).toBe(6.3);
  });

  it('should return 8.3 for ranges over 35', () => {
    const range = 36;

    expect(getGrenadeTof(range)).toBe(8.3);
  });
});
