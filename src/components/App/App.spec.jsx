import React from "react";
import { shallow } from "enzyme";
import App from "./component";

import { act } from "react-dom/test-utils";

const waitOneTick = (simulate) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(simulate);
    }, 0);
  });

describe("mounting component", () => {
  let wrapper;
  let useEffect;

  let mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(async () => {
    useEffect = jest.spyOn(React, "useEffect");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should pass prop signedIn as false if user has not signed in", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: () =>
          JSON.stringify({
            message: "SignedIn Error",
          }),
      })
    );

    mockUseEffect();

    await act(async () => {
      await waitOneTick((wrapper = await shallow(<App currentView='home' />)));
    });

    expect(wrapper.find("Connect(Header)").prop("signedIn")).toBe(false);
  });

  it("should pass prop signedIn as true if user has signed in", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: () =>
          JSON.stringify({
            message: "Signed In",
          }),
      })
    );

    mockUseEffect();

    await act(async () => {
      await waitOneTick((wrapper = await shallow(<App currentView='home' />)));
    });

    expect(wrapper.find("Connect(Header)").prop("signedIn")).toBe(true);
  });
});

describe("handleSetSignIn", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App currentView='home' />);
  });

  it("should update signedIn value when handleSetSignedIn is called", () => {
    expect(wrapper.find("Connect(Header)").prop("signedIn")).toBe(false);

    wrapper.find("Connect(Header)").invoke("handleSetSignedIn")();

    expect(wrapper.find("Connect(Header)").prop("signedIn")).toBe(true);
  });
});
