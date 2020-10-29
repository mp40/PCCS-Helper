import { URL_SIGNUP, URL_SIGNIN, URL_SIGNEDIN } from "./constants";

export const fetchSignup = async (user) => {
  let res;

  await fetch(URL_SIGNUP, {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: "Signup Error", error: error };
    });

  return res;
};

export const fetchSignin = async (user) => {
  let res;

  await fetch(URL_SIGNIN, {
    credentials: "include",
    mode: "cors",
    method: "post",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: "Signin Error", error: error };
    });

  return res;
};

export const fetchSignedIn = async () => {
  let res;

  await fetch(URL_SIGNEDIN, {
    credentials: "include",
    mode: "cors",
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      res = JSON.parse(data);
    })
    .catch((error) => {
      res = { message: "SignedIn Error", error: error };
    });

  return res;
};
