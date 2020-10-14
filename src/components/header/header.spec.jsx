import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./component";
import { act } from "react-dom/test-utils";

const handleResize = (width) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("The Header", () => {
  describe("Header User Profile desktop", () => {
    describe("sign up modal", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(<Header />);
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
    });

    describe("sign in modal", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(<Header />);
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
    });
  });

  describe("Header User Profile mobile", () => {
    describe("burger button", () => {
      let wrapper;

      beforeEach(() => {
        // window.innerWidth = 500;
        // window.dispatchEvent(new Event("resize"));
        wrapper = mount(<Header />);
        // act(() => {
        //   global.innerWidth = 500;
        //   global.dispatchEvent(new Event("resize"));
        // });
        // act(() => {
        //   window.innerWidth = 500;
        //   window.dispatchEvent(new Event("resize"));
        // });
      });

      it("should open sign up modal when Sign Up clicked", () => {
        // act(() => {
        //   window.innerWidth = 500;
        //   window.dispatchEvent(new Event("resize"));
        // });
        // act(async () => {
        //   await handleResize(400);
        // });

        // window.innerWidth = 500;
        // window.dispatchEvent(new Event("resize"));
        console.log(wrapper.debug());
        // wrapper.find("button").at(0).simulate("click");
        // const title = wrapper.find("HeaderModal").find("div").at(2);
        // expect(title.text()).toBe("Sign Up");
      });

      // it("should be possible to close modal", () => {
      //   wrapper.find("button").at(0).simulate("click");
      //   wrapper.find(".close").simulate("click");

      //   expect(wrapper.find("HeaderModal").exists()).toBe(false);
      // });

      // it("should be possible to switch modal", () => {
      //   wrapper.find("button").at(0).simulate("click");
      //   wrapper.find(".switchModal").simulate("click");

      //   const title = wrapper.find("HeaderModal").find("div").at(2);

      //   expect(title.text()).toContain("Sign In");
      // });
    });

    describe("sign in modal", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(<Header />);
      });

      // it("should open sign in modal", () => {
      //   wrapper.find("button").at(1).simulate("click");
      //   const title = wrapper.find("HeaderModal").find("div").at(2);

      //   expect(title.text()).toContain("Sign In");
      // });

      // it("should be possible to close modal", () => {
      //   wrapper.find("button").at(1).simulate("click");
      //   wrapper.find(".close").simulate("click");

      //   expect(wrapper.find("HeaderModal").exists()).toBe(false);
      // });

      // it("should be possible to switch modal", () => {
      //   wrapper.find("button").at(1).simulate("click");
      //   wrapper.find(".switchModal").simulate("click");

      //   const title = wrapper.find("HeaderModal").find("div").at(2);

      //   expect(title.text()).toContain("Sign Up");
      // });
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
