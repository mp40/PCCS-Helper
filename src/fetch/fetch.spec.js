import {
  fetchSignup,
  fetchSignin,
  fetchSignedIn,
  fetchSignOut,
  fetchPostCharacter,
  fetchPutCharacter,
  fetchGetCharacters,
} from './index';

import { URL_CHARACTERS, URL_SAVED_CHARACTERS } from './constants';

describe('Calling the Server', () => {
  describe('Sign Up', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should post new user to /signup', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          id: '1',
          email: 'testSan@gmail.com',
          password: 'hashed_password',
        }),
      }));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignup(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        id: '1',
        email: 'testSan@gmail.com',
        password: 'hashed_password',
      });
    });

    it('should return error message on post /signup failure', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignup(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({ error: 'error', message: 'Signup Error' });
    });
  });

  describe('Sign In', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should post new user to /signin', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Signed In' }),
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
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const user = {
        email: 'testSan@gmail.com',
        password: 'password',
      };

      const res = await fetchSignin(user);

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({ error: 'error', message: 'Signin Error' });
    });
  });

  describe('Signed In', () => {
    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should get /signedIn', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Signed In' }),
      }));

      const res = await fetchSignedIn();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'Signed In',
      });
    });

    it('should return error on get /signedIn failure', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const res = await fetchSignedIn();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: 'error',
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
        text: () => JSON.stringify({ message: 'Cookie Cleared' }),
      }));

      const res = await fetchSignOut();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'Cookie Cleared',
      });
    });

    it('should return error on /signOut failure', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const res = await fetchSignOut();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: 'error',
        message: 'Sign Out Error',
      });
    });
  });

  describe('Save Character', () => {
    const character = () => ({
      character_name: 'test name',
      str: 18,
      int: 12,
      wil: 11,
      hlt: 10,
      agi: 12,
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should post new character', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          message: 'saved character',
          character: character(),
        }),
      }));

      const res = await fetchPostCharacter(character());

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        message: 'saved character',
        character: character(),
      });
    });

    it('should return error on post /character failure', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const res = await fetchPostCharacter(character());

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: 'error',
        message: 'Save Error',
      });
    });
  });

  describe('Update Character', () => {
    const character = () => ({
      character_id: 69,
      character_name: 'test name',
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should put new character', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          message: 'saved character',
          character: character(),
        }),
      }));

      const res = await fetchPutCharacter(character());

      const endpoint = `${URL_CHARACTERS}/${character().character_id}`;

      expect(fetch).toHaveBeenCalledWith(
        endpoint,
        expect.anything(),
      );

      expect(res).toEqual({
        message: 'saved character',
        character: character(),
      });
    });

    it('should return error on put /character failure', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const res = await fetchPutCharacter(character());

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: 'error',
        message: 'Save Error',
      });
    });
  });

  describe('Fetch Characters', () => {
    const character = () => ({
      character_id: 69,
      character_name: 'test name',
    });

    it('should get saved characters on get /characters', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ characters: [character()] }),
      }));

      const res = await fetchGetCharacters();

      const endpoint = URL_SAVED_CHARACTERS;

      expect(fetch).toHaveBeenCalledWith(
        endpoint,
        expect.anything(),
      );

      expect(res).toEqual({ characters: [character()] });
    });

    it('should return error on get /characters failure', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      const res = await fetchGetCharacters();

      expect(fetch).toHaveBeenCalled();

      expect(res).toEqual({
        error: 'error',
        message: 'Get Characters Error',
      });
    });
  });
});
