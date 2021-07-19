import { checkPasswordHasNoBadPatterns } from './index';

jest.mock('./data', () => ({
  __esModule: true,
  blacklistedPatterns: ['no', 'bad', 'b@d'],
}));

describe('helper - check password for bad patterns', () => {
  it('should return true if bad patterns not found', () => {
    const password = 'reallyGood@becomingAccepted';

    expect(checkPasswordHasNoBadPatterns(password)).toBe(true);
  });

  it('should return false if password contains blacklisted pattern', () => {
    let password = 'thisIsbad';

    expect(checkPasswordHasNoBadPatterns(password)).toBe(false);

    password = 'thisIsno';

    expect(checkPasswordHasNoBadPatterns(password)).toBe(false);
  });

  it('should return false if password contains blacklisted pattern with captial letters', () => {
    const password = 'thisIsB@d';

    expect(checkPasswordHasNoBadPatterns(password)).toBe(false);
  });

  it('should return false if password contains a single character', () => {
    const password = 'AAAAAAAAAAA';

    expect(checkPasswordHasNoBadPatterns(password)).toBe(false);
  });

  it('should return false if password contains less than 5 different characters', () => {
    const password = 'ABCDABCD';

    expect(checkPasswordHasNoBadPatterns(password)).toBe(false);
  });
});
