import React from "react";
import { shallow } from "enzyme";
import HeaderButtons from "./index";

describe("Header Buttons", () => {
  const handleShowSignUp = jest.fn();
  const handleShowSignIn = jest.fn();
  const wrapper = shallow(
    <HeaderButtons
      handleShowSignUp={handleShowSignUp}
      handleShowSignIn={handleShowSignIn}
    />
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should open sign up modal when sign up clicked", () => {
    wrapper.find("button").at(0).simulate("click");
    expect(handleShowSignUp).toHaveBeenCalled();
  });

  it("should open sign in modal when sign in clicked", () => {
    wrapper.find("button").at(1).simulate("click");
    expect(handleShowSignIn).toHaveBeenCalled();
  });
});
