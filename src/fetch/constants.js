const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3030';

export const URL_SIGNUP = `${url}/user/signup`;

export const URL_SIGNIN = `${url}/user/signin`;

export const URL_SIGNEDIN = `${url}/user/signedIn`;

export const URL_SIGNOUT = `${url}/user/signOut`;

export const URL_CHARACTERS = `${url}/user/characters`;

export const URL_RESET = `${url}/user/reset`;
