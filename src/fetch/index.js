import { URL_SIGNUP, URL_SIGNIN, URL_SIGNEDIN, URL_SIGNOUT, URL_CHARACTERS, URL_SAVED_CHARACTERS } from './constants';

export const fetchSignup = async (user) => {
  let res;

  await fetch(URL_SIGNUP, {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'Signup Error', error };
    });

  return res;
};

export const fetchSignin = async (user) => {
  let res;

  await fetch(URL_SIGNIN, {
    credentials: 'include',
    mode: 'cors',
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'Signin Error', error };
    });

  return res;
};

export const fetchSignedIn = async () => {
  let res;

  await fetch(URL_SIGNEDIN, {
    credentials: 'include',
    mode: 'cors',
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'SignedIn Error', error };
    });

  return res;
};

export const fetchSignOut = async () => {
  let res;

  await fetch(URL_SIGNOUT, {
    credentials: 'include',
    mode: 'cors',
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'Sign Out Error', error };
    });

  return res;
};

export const fetchPostCharacter = async (character) => {
  let res;

  await fetch(URL_CHARACTERS, {
    method: 'post',
    body: JSON.stringify(character),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'Save Error', error };
    });

  return res;
};

export const fetchPutCharacter = async (character) => {
  let res;

  await fetch(`${URL_CHARACTERS}/${character.character_id}`, {
    method: 'put',
    body: JSON.stringify(character),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'Save Error', error };
    });

  return res;
};

export const fetchGetCharacters = async () => {
  let res;

  await fetch(URL_SAVED_CHARACTERS, {
    credentials: 'include',
    mode: 'cors',
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: 'Get Characters Error', error };
    });

  return res;
};
