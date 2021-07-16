import { URL_SIGNUP, URL_SIGNIN, URL_SIGNEDIN, URL_SIGNOUT, URL_CHARACTERS, URL_RESET } from './constants';
import { validateCharacterFromResponse, validateCharacterArrayFromResponse } from './data';

export const fetchSignup = async (user) => {
  try {
    const res = await fetch(URL_SIGNUP, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (res.status === 429) {
      return { message: 'Too many sign up attempts', error: new Error('Too many sign up attempts') };
    }

    return await res.json();
  } catch (err) {
    return { message: 'Signup Error', error: err };
  }
};

export const fetchSignin = async (user) => {
  try {
    const res = await fetch(URL_SIGNIN, {
      credentials: 'include',
      mode: 'cors',
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 429) {
      return { message: 'Too many sign in attempts', error: new Error('Too many sign in attempts') };
    }

    return await res.json();
  } catch (err) {
    return { message: 'Signin Error', error: err };
  }
};

export const fetchSignedIn = async () => {
  try {
    const res = await fetch(URL_SIGNEDIN, {
      credentials: 'include',
      mode: 'cors',
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  } catch (err) {
    return { message: 'SignedIn Error', error: err };
  }
};

export const fetchSignOut = async () => {
  try {
    const res = await fetch(URL_SIGNOUT, {
      credentials: 'include',
      mode: 'cors',
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  } catch (err) {
    return { message: 'Sign Out Error', error: err };
  }
};

export const fetchPostCharacter = async (character) => {
  try {
    let res = await fetch(URL_CHARACTERS, {
      method: 'post',
      body: JSON.stringify(character),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();

    const characterHasRequiredkeys = validateCharacterFromResponse(res.character);

    if (!characterHasRequiredkeys) {
      return { message: 'Save Error', error: new Error('save error') };
    }

    return res;
  } catch (err) {
    return { message: 'Save Error', error: err };
  }
};

export const fetchPutCharacter = async (character, characterId) => {
  try {
    let res = await fetch(`${URL_CHARACTERS}/${characterId}`, {
      method: 'put',
      body: JSON.stringify(character),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();

    const characterHasRequiredkeys = validateCharacterFromResponse(res.character);

    if (!characterHasRequiredkeys) {
      return { message: 'Save Error', error: new Error('save error') };
    }
    return res;
  } catch (err) {
    return { message: 'Save Error', error: err };
  }
};

export const fetchGetCharacters = async () => {
  try {
    let res = await fetch(URL_CHARACTERS, {
      credentials: 'include',
      mode: 'cors',
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    res = await res.json();

    const isValidResponse = validateCharacterArrayFromResponse(res.characters);

    if (!isValidResponse) {
      return { message: 'Get Characters Error', error: new Error('get characters error') };
    }

    return res;
  } catch (err) {
    return { message: 'Get Characters Error', error: err };
  }
};

export const fetchResetPassword = async (email) => {
  try {
    let res = await fetch(URL_RESET, {
      method: 'post',
      body: JSON.stringify({ email }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();

    return res;
  } catch (err) {
    return { message: 'Reset Error', error: err };
  }
};
