import { renderCorrectAmmoTitle } from '../GearRow';

describe('rendering the correct information', () => {
  it('should return "Single Rounds" if type is "Rnd"', () => {
    const magObj = { type: 'Rnd', cap: '7' };
    expect(renderCorrectAmmoTitle(magObj)).toBe('Single Rounds');
  });
  it('should return "Single Rounds" if type is "Rnd"', () => {
    const magObj = { type: 'Mag', cap: '30' };
    expect(renderCorrectAmmoTitle(magObj)).toBe('30 round Mag');
  });
});
