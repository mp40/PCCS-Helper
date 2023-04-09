import {
  fetchSignup,
  fetchSignin,
  fetchSignedIn,
  fetchSignOut,
  fetchPostCharacter,
  fetchPutCharacter,
  fetchGetCharacters,
  fetchResetPassword,
  fetchResettingPassword,
} from './index';

import { URL_CHARACTERS, URL_RESET } from './constants';

const characterFromDatabase = {
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

describe('Calling the Server', () => {
  describe('Sign Up', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should post new user to /signup', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Signed Up' }),
      }));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignup(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'Signed Up',
      });
    });

    it('should return error message on post /signup failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignup(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({ error: err, message: 'Signup Error' });
    });

    it('should return error message on 429 response', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 429 }));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignup(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({ message: 'Too many sign up attempts', error: new Error('Too many sign up attempts') });
    });
  });

  describe('Sign In', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should post new user to /signin', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Signed In' }),
      }));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignin(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'Signed In',
      });
    });

    it('should return error message on post /signin failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignin(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({ error: err, message: 'Signin Error' });
    });

    it('should return error message on 429 response', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 429 }));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignin(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({ message: 'Too many sign in attempts', error: new Error('Too many sign in attempts') });
    });
  });

  describe('Signed In', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should get /signedIn', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Signed In' }),
      }));

      const res = await fetchSignedIn();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'Signed In',
      });
    });

    it('should return error on get /signedIn failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const res = await fetchSignedIn();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'SignedIn Error',
      });
    });
  });

  describe('Sign Out', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should get /signOut', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Cookie Cleared' }),
      }));

      const res = await fetchSignOut();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'Cookie Cleared',
      });
    });

    it('should return error on /signOut failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const res = await fetchSignOut();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Sign Out Error',
      });
    });
  });

  describe('Save Character', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should post new character', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          message: 'saved character',
          character: characterFromDatabase,
        }),
      }));

      const res = await fetchPostCharacter(characterFromDatabase);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'saved character',
        character: characterFromDatabase,
      });
    });

    it('should return error on post /character failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const res = await fetchPostCharacter(characterFromDatabase);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Save Error',
      });
    });

    it('should return error on post /character failure due returned character missing keys', async () => {
      const err = new Error('save error');

      const characterWithMissingKey = { ...characterFromDatabase };
      delete characterWithMissingKey.hand_level;

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          message: 'saved character',
          character: characterWithMissingKey,
        }),
      }));

      const res = await fetchPostCharacter(characterFromDatabase);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Save Error',
      });
    });
  });

  describe('Update Character', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should put new character', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          message: 'saved character',
          character: characterFromDatabase,
        }),
      }));

      const res = await fetchPutCharacter(characterFromDatabase, characterFromDatabase.character_id);

      const endpoint = `${URL_CHARACTERS}/${characterFromDatabase.character_id}`;

      expect(fetch).toHaveBeenCalledWith(
        endpoint,
        expect.anything(),
      );

      expect(res).toEqual({
        message: 'saved character',
        character: characterFromDatabase,
      });
    });

    it('should return error on put /character failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const res = await fetchPutCharacter(characterFromDatabase);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Save Error',
      });
    });

    it('should return error on put /character failure due returned character missing keys', async () => {
      const err = new Error('save error');

      const characterWithMissingKey = { ...characterFromDatabase };
      delete characterWithMissingKey.hand_level;

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          message: 'saved character',
          character: characterWithMissingKey,
        }),
      }));

      const res = await fetchPutCharacter(characterFromDatabase, characterFromDatabase.character_id);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Save Error',
      });
    });
  });

  describe('Fetch Characters', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should get saved characters on get /characters', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ characters: [characterFromDatabase] }),
      }));

      const res = await fetchGetCharacters();

      const endpoint = URL_CHARACTERS;

      expect(fetch).toHaveBeenCalledWith(
        endpoint,
        expect.anything(),
      );

      expect(res).toEqual({ characters: [characterFromDatabase] });
    });

    it('should return error on get /characters failure', async () => {
      const err = new Error();

      global.fetch = jest.fn().mockImplementation(() => Promise.reject(err));

      const res = await fetchGetCharacters();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Get Characters Error',
      });
    });

    it('should return error if response characters not an array', async () => {
      const err = new Error('get characters error');

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ characters: characterFromDatabase }),
      }));

      const res = await fetchGetCharacters();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Get Characters Error',
      });
    });

    it('should return error if response characters has a character missing key value', async () => {
      const err = new Error('get characters error');

      const characterWithMissingKey = { ...characterFromDatabase };
      delete characterWithMissingKey.character_id;

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ characters: [characterFromDatabase, characterWithMissingKey] }),
      }));

      const res = await fetchGetCharacters();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: err,
        message: 'Get Characters Error',
      });
    });
  });

  describe('Reset Password', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should submit user email on post /reset', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Email Sent' }),
      }));

      await fetchResetPassword('reset@email.com');

      const secondArg = global.fetch.mock.calls[0][1];

      expect(secondArg.body).toBe(JSON.stringify({ email: 'reset@email.com' }));
    });

    it('should return email sent message on success', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Email Sent' }),
      }));

      const res = await fetchResetPassword('reset@email.com');

      expect(res).toEqual({ message: 'Email Sent' });
    });

    it('should return error msg if fetch fails', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject());

      const res = await fetchResetPassword('reset@email.com');

      expect(res).toEqual({ message: 'Reset Error' });
    });
  });

  describe('Resetting Password', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should submit put /reset request', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Password Updated' }),
      }));

      await fetchResettingPassword('reset@email.com', 'password', 'token');

      expect(global.fetch).toHaveBeenCalledWith(URL_RESET, expect.objectContaining({ method: 'put' }));
    });

    it('should submit user email and new password on put /reset', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Password Updated' }),
      }));

      await fetchResettingPassword('reset@email.com', 'password', 'token');

      const secondArg = global.fetch.mock.calls[0][1];

      expect(secondArg.body).toBe(JSON.stringify({ email: 'reset@email.com', password: 'password', token: 'token' }));
    });

    it('should return password updated message on success', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Password Updated' }),
      }));

      const res = await fetchResettingPassword('reset@email.com', 'password', 'token');

      expect(res).toEqual({ message: 'Password Updated' });
    });

    it('should return error msg if fetch reset fails', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject());

      const res = await fetchResetPassword('reset@email.com');

      expect(res).toEqual({ message: 'Reset Error' });
    });

    it('should return error msg if fetch resetting fails', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject());

      const res = await fetchResettingPassword('reset@email.com', 'password', 'token');

      expect(res).toEqual({ message: 'Reset Error' });
    });
  });
});
