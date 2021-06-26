import React from 'react';
import { shallow } from 'enzyme';
import HeaderButtons from './index';

describe('Header Buttons', () => {
  const handleShowSignUp = jest.fn();
  const handleShowSignIn = jest.fn();
  const handleShowDropdown = jest.fn();
  const handleSignOut = jest.fn();

  describe('desktop', () => {
    const wrapper = shallow(
      <HeaderButtons
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleShowDropdown={handleShowDropdown}
        handleSignOut={handleSignOut}
        width={800}
        signedIn={false}
      />,
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should not display a burger menu button ', () => {
      expect(wrapper.find('.burger').exists()).toBe(false);
      expect(wrapper.find('HeaderProfile').exists()).toBe(true);
    });
  });

  describe('mobile', () => {
    const wrapper = shallow(
      <HeaderButtons
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleShowDropdown={handleShowDropdown}
        handleSignOut={handleSignOut}
        width={799}
        signedIn={false}
      />,
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display a burger menu button instead of sign up and in buttons', () => {
      expect(wrapper.find('.burger').exists()).toBe(true);
      expect(wrapper.find('HeaderProfile').exists()).toBe(false);
    });

    it('should display drop down menu when burger clicked ', () => {
      wrapper.find('.burger').simulate('click');
      expect(handleShowDropdown).toHaveBeenCalled();
    });
  });
});
