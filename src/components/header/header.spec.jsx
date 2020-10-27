import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./component";

import { act } from "react-dom/test-utils";

const waitOneTick = (simulate) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(simulate);
    }, 0);
  });

describe("The Header", () => {
  describe("sign up modal", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Header />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should open sign up modal when Sign Up clicked", () => {
      wrapper.find("button").at(0).simulate("click");
      const title = wrapper.find("HeaderModal").find("div").at(2);

      expect(title.text()).toBe("Sign Up");
    });

    it("should be possible to close modal", () => {
      wrapper.find("button").at(0).simulate("click");
      wrapper.find(".close").simulate("click");

      expect(wrapper.find("HeaderModal").exists()).toBe(false);
    });

    it("should be possible to switch modal", () => {
      wrapper.find("button").at(0).simulate("click");
      wrapper.find(".switchModal").simulate("click");

      const title = wrapper.find("HeaderModal").find("div").at(2);

      expect(title.text()).toContain("Sign In");
    });

    it("should close modal on sign up", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          text: () =>
            JSON.stringify({
              id: "1",
              email: "testSan@gmail.com",
              password: "hashed_password",
            }),
        })
      );

      wrapper.find("button").at(0).simulate("click");

      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "test@gmail.com" } });

      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "password" } });

      await act(async () => {
        await waitOneTick(wrapper.find("form").simulate("submit"));
      });

      wrapper.update();

      expect(wrapper.text()).not.toContain("Email");
      expect(wrapper.text()).not.toContain("Password");
    });

    it("should not close modal on sign up error", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          text: () =>
            JSON.stringify({
              error: "error",
              message: "Signup Error",
            }),
        })
      );

      wrapper.find("button").at(0).simulate("click");

      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "test@gmail.com" } });

      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "password" } });

      await act(async () => {
        await waitOneTick(wrapper.find("form").simulate("submit"));
      });

      wrapper.update();

      expect(wrapper.text()).toContain("Email");
      expect(wrapper.text()).toContain("Password");
    });
  });

  describe("sign in modal", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Header />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should open sign in modal", () => {
      wrapper.find("button").at(1).simulate("click");
      const title = wrapper.find("HeaderModal").find("div").at(2);

      expect(title.text()).toContain("Sign In");
    });

    it("should be possible to close modal", () => {
      wrapper.find("button").at(1).simulate("click");
      wrapper.find(".close").simulate("click");

      expect(wrapper.find("HeaderModal").exists()).toBe(false);
    });

    it("should be possible to switch modal", () => {
      wrapper.find("button").at(1).simulate("click");
      wrapper.find(".switchModal").simulate("click");

      const title = wrapper.find("HeaderModal").find("div").at(2);

      expect(title.text()).toContain("Sign Up");
    });

    it("should be possible to sign in", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          text: () => JSON.stringify({ message: "Signed In" }),
        })
      );

      wrapper.find("button").at(1).simulate("click");

      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "test@gmail.com" } });

      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "password" } });

      await act(async () => {
        await waitOneTick(wrapper.find("form").simulate("submit"));
      });

      wrapper.update();

      expect(wrapper.text()).toContain("Sign Out");
    });

    it("should not close modal on sign up error", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          text: () =>
            JSON.stringify({
              error: "error",
              message: "Signup Error",
            }),
        })
      );

      wrapper.find("button").at(1).simulate("click");

      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "test@gmail.com" } });

      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "password" } });

      await act(async () => {
        await waitOneTick(wrapper.find("form").simulate("submit"));
      });

      wrapper.update();

      expect(wrapper.text()).not.toContain("Sign Out");

      expect(wrapper.text()).toContain("Email");
      expect(wrapper.text()).toContain("Password");
    });
  });

  describe("burger button in mobile", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Header />);

      act(() => {
        window.innerWidth = 799;
        window.dispatchEvent(new Event("resize"));
      });
    });

    it("should open dropdown when burger clicked", () => {
      wrapper.update();
      wrapper.find(".burger").simulate("click");
      expect(wrapper.find("HeaderDropdown").exists()).toBe(true);
    });
  });

  describe("Create Character Header", () => {
    const currentView = "createChar";
    const totalWeight = 6.66;

    const wrapper = shallow(
      <Header currentView={currentView} totalWeight={totalWeight} />
    );

    it("should render the title", () => {
      expect(wrapper.find("HeaderCreateCharacter").dive().text()).toContain(
        "Create Character"
      );
    });

    it("should render the total weight", () => {
      expect(wrapper.find("HeaderCreateCharacter").dive().text()).toContain(
        "6.66"
      );
    });
  });
});
