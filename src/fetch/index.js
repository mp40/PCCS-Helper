import { URL_SIGNUP, URL_SIGNIN, URL_SIGNEDIN, URL_SIGNOUT, URL_CHARACTERS, URL_RESET } from './constants';
import { validateCharacterFromResponse, validateCharacterArrayFromResponse } from './data';

const post = async (url, payload) => {
  try {
    const res = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    return { status: res.status, data };
  } catch (error) {
    return { status: 'error', error };
  }
};

const put = async (url, payload) => {
  try {
    const res = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'put',
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    return { status: res.status, data };
  } catch (error) {
    return { status: 'error', error };
  }
};

const get = async (url) => {
  try {
    const res = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'get',
    });

    const data = await res.json();

    return { status: res.status, data };
  } catch (error) {
    return { status: 'error', error };
  }
};

export const fetchSignup = async (user) => {
  const res = await post(URL_SIGNUP, user);

  if (res.status === 'error') {
    return { ...res, message: 'Signup Error' };
  }

  if (res.status === 429) {
    return { message: 'Too many sign up attempts', error: new Error('Too many sign up attempts') };
  }

  return res.data;
};

export const fetchSignin = async (user) => {
  const res = await post(URL_SIGNIN, user);

  if (res.status === 'error') {
    return { ...res, message: 'Signin Error' };
  }

  if (res.status === 429) {
    return { message: 'Too many sign in attempts', error: new Error('Too many sign in attempts') };
  }

  return res.data;
};

export const fetchSignedIn = async () => {
  const res = await get(URL_SIGNEDIN);

  if (res.status === 'error') {
    return { ...res, message: 'SignedIn Error' };
  }

  return res.data;
};

export const fetchSignOut = async () => {
  const res = await get(URL_SIGNOUT);

  if (res.status === 'error') {
    return { ...res, message: 'Sign Out Error' };
  }

  return res.data;
};

export const fetchPostCharacter = async (character) => {
  const res = await post(URL_CHARACTERS, character);

  if (res.status === 'error') {
    return { ...res, message: 'Save Error' };
  }

  const characterHasRequiredkeys = validateCharacterFromResponse(res.data.character);

  if (!characterHasRequiredkeys) {
    return { message: 'Save Error', error: new Error('save error') };
  }

  return res.data;
};

export const fetchPutCharacter = async (character, characterId) => {
  const res = await put(`${URL_CHARACTERS}/${characterId}`, character);

  if (res.status === 'error') {
    return { ...res, message: 'Save Error' };
  }

  const characterHasRequiredkeys = validateCharacterFromResponse(res.data.character);

  if (!characterHasRequiredkeys) {
    return { message: 'Save Error', error: new Error('save error') };
  }

  return res.data;
};

export const fetchGetCharacters = async () => {
  const res = await get(URL_CHARACTERS);

  if (res.status === 'error') {
    return { ...res, message: 'Get Characters Error' };
  }

  const isValidResponse = validateCharacterArrayFromResponse(res.data.characters);

  if (!isValidResponse) {
    return { message: 'Get Characters Error', error: new Error('get characters error') };
  }

  return res.data;
};

export const fetchResetPassword = async (email) => {
  const res = await post(URL_RESET, { email });

  if (res.status === 'error') {
    return { ...res, message: 'Reset Error' };
  }

  return res.data;
};

export const fetchResettingPassword = async (email, password, token) => {
  const res = await put(`${URL_RESET}/${token}`, { email, password });

  if (res.status === 'error') {
    return { ...res, message: 'Reset Error' };
  }

  return res.data;
};
