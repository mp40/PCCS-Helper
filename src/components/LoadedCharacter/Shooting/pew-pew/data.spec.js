import { getOddsOfHitting } from './data';

describe('Getting Odds Of Hitting', () => {
  describe('ROF Single at Standing Exposed', () => {
    const sizeMod = 7;
    const rof = 'Single';
    it('should return "NA" at alm -10', () => {
      const alm = -10;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe('NA');
    });

    it('should return 6 at alm 0', () => {
      const alm = 0;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(6);
    });

    it('should return 6 at alm 10', () => {
      const alm = 10;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(46);
    });

    it('should return 6 at alm 15', () => {
      const alm = 15;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(80);
    });
  });

  describe('ROF Auto at Standing Exposed', () => {
    const sizeMod = 14;
    const rof = 'Auto';
    it('should return 17 at alm -10', () => {
      const alm = -10;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(17);
    });

    it('should return 52 at alm 0', () => {
      const alm = 0;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(52);
    });

    it('should return 95 at alm 10', () => {
      const alm = 10;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(95);
    });

    it('should return 99 at alm 15', () => {
      const alm = 15;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(99);
    });
  });
  describe('ROF 3RB at Kneeling Exposed', () => {
    const sizeMod = 11;
    const rof = '3RB';
    it('should return 11 at alm -10', () => {
      const alm = -10;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(11);
    });

    it('should return 38 at alm 0', () => {
      const alm = 0;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(38);
    });

    it('should return 86 at alm 10', () => {
      const alm = 10;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(86);
    });

    it('should return 98 at alm 15', () => {
      const alm = 15;

      const result = getOddsOfHitting(alm, sizeMod, rof);
      expect(result).toBe(98);
    });
  });
});
