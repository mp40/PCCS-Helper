import { fetchSignup, fetchSignin, fetchSignedIn } from "./index";

describe("Calling the Server", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should post new user to /signup", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        text: () =>
          JSON.stringify({
            id: "1",
            email: "testSan@gmail.com",
            password: "hashed_password",
          }),
      });
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignup(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({
      id: "1",
      email: "testSan@gmail.com",
      password: "hashed_password",
    });
  });

  it("should return error message on post /signup failure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject("error");
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignup(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({ error: "error", message: "Signup Error" });
  });

  it("should post new user to /signin", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        text: () => JSON.stringify({ message: "Signed In" }),
      });
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignin(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({
      message: "Signed In",
    });
  });

  it("should return error message on post /sign failure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject("error");
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignin(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({ error: "error", message: "Signin Error" });
  });

  it("should get /signedIn", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        text: () => JSON.stringify({ message: "Signed In" }),
      });
    });

    const res = await fetchSignedIn();

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({
      message: "Signed In",
    });
  });

  it("should return error on get /signedIn failure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject("error");
    });

    const res = await fetchSignedIn();

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({
      error: "error",
      message: "SignedIn Error",
    });
  });
});
