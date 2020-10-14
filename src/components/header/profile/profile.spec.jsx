import React from "react";
import { shallow } from "enzyme";
import HeaderProfile from "./index";

describe("Header Buttons", () => {
  const handleShowSignUp = jest.fn();
  const handleShowSignIn = jest.fn();
  //   const handleShowDropdown = jest.fn();

  //   describe("desktop", () => {
  const wrapper = shallow(
    <HeaderProfile
      handleShowSignUp={handleShowSignUp}
      handleShowSignIn={handleShowSignIn}
      // handleShowDropdown={handleShowDropdown}
      // width={800}
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

//   describe("mobile", () => {
//     const wrapper = shallow(
//       <HeaderButtons
//         handleShowSignUp={handleShowSignUp}
//         handleShowSignIn={handleShowSignIn}
//         handleShowDropdown={handleShowDropdown}
//         width={799}
//       />
//     );

//     afterEach(() => {
//       jest.clearAllMocks();
//     });

//     it("should display a burger menu button instead of sign up and in buttons", () => {
//       expect(wrapper.find(".burger").exists()).toBe(true);
//       expect(wrapper.text()).not.toContain("Sign Up");
//       expect(wrapper.text()).not.toContain("Sign In");
//     });

//     it("should display drop down menu when burger clicked ", () => {
//       wrapper.find(".burger").simulate("click");
//       expect(handleShowDropdown).toHaveBeenCalled();
//     });
//   });
// });
