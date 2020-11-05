import React from 'react';
import { shallow } from 'enzyme';
import HeaderProfile from './index';

describe('Header Buttons', () => {
  const handleShowSignUp = jest.fn();
  const handleShowSignIn = jest.fn();
  const handleSignOut = jest.fn();

  describe('when signed out', () => {
    const wrapper = shallow(
      <HeaderProfile
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleSignOut={handleSignOut}
        signedIn={false}
      />,
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should not render sign out button', () => {
      expect(wrapper.text()).not.toContain('Sign Out');
    });

    it('should open sign up modal when sign up clicked', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(handleShowSignUp).toHaveBeenCalled();
    });

    it('should open sign in modal when sign in clicked', () => {
      wrapper.find('button').at(1).simulate('click');
      expect(handleShowSignIn).toHaveBeenCalled();
    });
  });

  describe('when signed in', () => {
    const wrapper = shallow(
      <HeaderProfile
        handleShowSignUp={handleShowSignUp}
        handleShowSignIn={handleShowSignIn}
        handleSignOut={handleSignOut}
        signedIn
      />,
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should not render sign up and sign in button', () => {
      expect(wrapper.text()).not.toContain('Sign In');
      expect(wrapper.text()).not.toContain('Sign Up');
    });

    it('should handle sign out when sign out button clicked', () => {
      wrapper.find('button').simulate('click');
      expect(handleSignOut).toHaveBeenCalled();
    });
  });
});
