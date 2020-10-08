import React from "react";
import { shallow } from "enzyme";
import Header from "./component";

describe("The Header", () => {
  describe("sign up modal", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it("should open sign up modal when Sign Up clicked", () => {
      const buttons = wrapper.find("HeaderButtons").dive();
      buttons.find("button").at(0).simulate("click");

      const title = wrapper.find("HeaderModal").dive().find("div").at(2);

      expect(title.text()).toContain("Sign Up");
    });

    it("should be possible to close modal", () => {
      const buttons = wrapper.find("HeaderButtons").dive();
      buttons.find("button").at(0).simulate("click");

      const modal = wrapper.find("HeaderModal").dive();
      modal.find(".close").simulate("click");

      expect(wrapper.find("HeaderModal").exists()).toBe(false);
    });

    it("should be possible to switch modal", () => {
      const buttons = wrapper.find("HeaderButtons").dive();
      buttons.find("button").at(0).simulate("click");

      const modal = wrapper.find("HeaderModal").dive();
      modal.find(".switchModal").simulate("click");

      const title = wrapper.find("HeaderModal").dive().find("div").at(2);

      expect(title.text()).toContain("Sign In");
    });
  });

  describe("sign in modal", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it("should open sign in modal", () => {
      const buttons = wrapper.find("HeaderButtons").dive();
      buttons.find("button").at(1).simulate("click");

      const title = wrapper.find("HeaderModal").dive().find("div").at(2);

      expect(title.text()).toContain("Sign In");
    });

    it("should be possible to close modal", () => {
      const buttons = wrapper.find("HeaderButtons").dive();
      buttons.find("button").at(1).simulate("click");

      const modal = wrapper.find("HeaderModal").dive();
      modal.find(".close").simulate("click");

      expect(wrapper.find("HeaderModal").exists()).toBe(false);
    });

    it("should be possible to switch modal", () => {
      const buttons = wrapper.find("HeaderButtons").dive();
      buttons.find("button").at(1).simulate("click");

      const modal = wrapper.find("HeaderModal").dive();
      modal.find(".switchModal").simulate("click");

      const title = wrapper.find("HeaderModal").dive().find("div").at(2);

      expect(title.text()).toContain("Sign Up");
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
