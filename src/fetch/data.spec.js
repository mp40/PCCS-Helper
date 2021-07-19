import { validateCharacterFromResponse } from './data';

const characterFromResponse = {
  character_id: 1,
  character_name: '',
  user_id: 1,
  str: 10,
  int: 10,
  hlt: 10,
  wil: 10,
  agi: 10,
  gun_level: 4,
  hand_level: 2,
  uniform: 'normal',
  helmet: undefined,
  vest: undefined,
  equipment: [],
  firearms: [],
  grenades: [],
  launchers: [],
};

describe('validating character object', () => {
  it('should return false if array', () => {
    const character = [{ ...characterFromResponse }];

    expect(validateCharacterFromResponse(character)).toBe(false);
  });

  it('should return false if JSON string', () => {
    const character = JSON.stringify(characterFromResponse);

    expect(validateCharacterFromResponse(character)).toBe(false);
  });

  it('should return true if the character has the correct keys', () => {
    const character = { ...characterFromResponse };

    expect(validateCharacterFromResponse(character)).toBe(true);
  });

  it('should return false if the character is missing a key', () => {
    const character = { ...characterFromResponse };
    delete character.launchers;

    expect(validateCharacterFromResponse(character)).toBe(false);
  });
});
