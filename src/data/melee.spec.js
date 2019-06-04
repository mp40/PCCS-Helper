const meleeData = require('./melee');

const checkMeleeData = () => {
  let result = 'matches basic spec';

  for (let i = 0; i < meleeData.length; i += 1) {
    if (typeof meleeData[i].Name !== 'string') {
      result = 'Name key has issues';
    }

    if (typeof meleeData[i].ws !== 'string') {
      result = 'ws key has issues';
    }
    if (typeof meleeData[i].wc !== 'string') {
      result = 'wc key has issues';
    }

    if (typeof meleeData[i].IDc !== 'string') {
      result = 'IDc key has issues';
    }
    if (typeof meleeData[i].IDs !== 'string') {
      result = 'IDs key has issues';
    }

    if (typeof meleeData[i].Rng !== 'string') {
      result = 'Rng key has issues';
    }
  }
  return result;
};

describe('validate melee data', () => {
  it('should have a name key with string value', () => {
    expect(checkMeleeData()).toBe('matches basic spec');
    expect(checkMeleeData()).not.toBe('Name key has issues');
  });
  it('should have a weapon speed key with string value', () => {
    expect(checkMeleeData()).toBe('matches basic spec');
    expect(checkMeleeData()).not.toBe('ws key has issues');
  });
  it('should have a weapon class key with string value', () => {
    expect(checkMeleeData()).toBe('matches basic spec');
    expect(checkMeleeData()).not.toBe('wc key has issues');
  });
  it('should have a cutting damge key with string value', () => {
    expect(checkMeleeData()).toBe('matches basic spec');
    expect(checkMeleeData()).not.toBe('IDc key has issues');
  });
  it('should have a stabbing damage key with string value', () => {
    expect(checkMeleeData()).toBe('matches basic spec');
    expect(checkMeleeData()).not.toBe('IDs key has issues');
  });
  it('should have a range key with string value', () => {
    expect(checkMeleeData()).toBe('matches basic spec');
    expect(checkMeleeData()).not.toBe('Rng key has issues');
  });
});
