import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Header from './component';

import * as fetchModule from '../../fetch';

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

describe('The Header', () => {
  const handleSetSignedIn = jest.fn();

  describe('user button views', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    it('should have link to home', () => {
      const link = wrapper.find('Link').find('button');
      expect(link.exists()).toBe(true);
    });

    it('should show Sign Up and Sign In buttons if not signed in', () => {
      expect(wrapper.text()).toContain('Sign Up');
      expect(wrapper.text()).toContain('Sign In');
    });

    it('should not show Signed Out button if not signed in', () => {
      expect(wrapper.text()).not.toContain('Sign Out');
    });

    it('should not show Sign Up and Sign In buttons if signed in', () => {
      wrapper.setProps({ signedIn: true });

      expect(wrapper.text()).not.toContain('Sign Up');
      expect(wrapper.text()).not.toContain('Sign In');
    });

    it('should show Signed Out button if signed in', () => {
      wrapper.setProps({ signedIn: true });

      expect(wrapper.text()).toContain('Sign Out');
    });

    it('should open open sign up modal when sign up button clicked', () => {
      wrapper.find('button[children="Sign Up"]').simulate('click');

      expect(wrapper.find('HeaderModal').props().type).toBe('signup');
    });

    it('should open open sign in modal when sign in button clicked', () => {
      wrapper.find('button[children="Sign In"]').simulate('click');

      expect(wrapper.find('HeaderModal').props().type).toBe('signin');
    });
  });

  describe('sign up modal', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should open sign up modal when Sign Up clicked', () => {
      wrapper.find('button[children="Sign Up"]').simulate('click');
      const title = wrapper.find('div[children="Sign Up"]');

      expect(title.exists()).toBe(true);
    });

    it('should be possible to close modal', () => {
      wrapper.find('button[children="Sign Up"]').simulate('click');
      wrapper.find('.close').simulate('click');

      const title = wrapper.find('div[children="Sign Up"]');
      expect(title.exists()).toBe(false);
    });

    it('should be possible to switch modal', () => {
      wrapper.find('button[children="Sign Up"]').simulate('click');
      wrapper.find('.switchModal').simulate('click');

      const title = wrapper.find('div[children="Sign In"]');
      expect(title.exists()).toBe(true);
    });

    it('should close modal on sign up', async () => {
      jest.spyOn(fetchModule, 'fetchSignup').mockImplementation(() => ({ message: 'Signed Up' }));

      wrapper.find('button[children="Sign Up"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(wrapper.text()).not.toContain('Email');
      expect(wrapper.text()).not.toContain('Password');
    });

    it('should not close modal on sign up error', async () => {
      const err = new Error();
      jest.spyOn(fetchModule, 'fetchSignup').mockImplementation(() => ({ error: err, message: 'Signup Error' }));

      wrapper.find('button[children="Sign Up"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(wrapper.text()).toContain('Email');
      expect(wrapper.text()).toContain('Password');
    });

    it('should send error message', async () => {
      const err = new Error();
      jest.spyOn(fetchModule, 'fetchSignup').mockImplementation(() => ({ error: err, message: 'Signup Error' }));

      wrapper.find('button[children="Sign Up"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(wrapper.text()).toContain('Signup Error');
    });
  });

  describe('sign in modal', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should open sign in modal', () => {
      wrapper.find('button[children="Sign In"]').simulate('click');
      const title = wrapper.find('div[children="Sign In"]');

      expect(title.exists()).toBe(true);
    });

    it('should be possible to close modal', () => {
      wrapper.find('button[children="Sign In"]').simulate('click');
      wrapper.find('.close').simulate('click');

      const title = wrapper.find('div[children="Sign In"]');
      expect(title.exists()).toBe(false);
    });

    it('should be possible to switch modal', () => {
      wrapper.find('button[children="Sign In"]').simulate('click');
      wrapper.find('.switchModal').simulate('click');

      const title = wrapper.find('div[children="Sign Up"]');
      expect(title.exists()).toBe(true);
    });

    it('should be possible to sign in', async () => {
      jest.spyOn(fetchModule, 'fetchSignin').mockImplementation(() => ({ message: 'Signed In' }));

      wrapper.find('button[children="Sign In"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(handleSetSignedIn).toHaveBeenCalled();
    });

    it('should store saved characters from database to session storage', async () => {
      jest.spyOn(fetchModule, 'fetchSignin').mockImplementation(() => ({ message: 'Signed In' }));

      const spy = jest.spyOn(Storage.prototype, 'setItem');

      wrapper.find('button[children="Sign In"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(spy).toHaveBeenCalledWith('savedCharacters', undefined);
    });

    it('should not close modal on sign in error', async () => {
      const err = new Error('err');
      jest.spyOn(fetchModule, 'fetchSignin').mockImplementation(() => ({ message: 'Signin Error', error: err }));

      wrapper.find('button[children="Sign In"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(handleSetSignedIn).not.toHaveBeenCalled();

      expect(wrapper.text()).toContain('Email');
      expect(wrapper.text()).toContain('Password');
    });

    it('should be able to switch to reset password modal on sign in error', async () => {
      const err = new Error('err');
      jest.spyOn(fetchModule, 'fetchSignin').mockImplementation(() => ({ message: 'Signin Error', error: err }));

      wrapper.find('button[children="Sign In"]').simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'reallyGoodPW' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      wrapper.find('button[children="Forgot Password?"]').simulate('click');

      expect(wrapper.text()).toContain('Reset Password');
    });
  });

  describe('reset modal', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          updateSavedCharacters={() => {}}
        />,
      );

      wrapper.find('HeaderButtons').invoke('handleShowSignIn')();
      wrapper.find('HeaderModal').invoke('handleResetPassword')();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should close modal when setShowModal invoked', () => {
      wrapper.find('HeaderModal').invoke('handleShowModal')();

      expect(wrapper.find('HeaderModal').exists()).toBe(false);
    });

    it('should switch modal when handleSwitchModal invoked', () => {
      wrapper.find('HeaderModal').invoke('handleSwitchModal')();

      expect(wrapper.find('HeaderModal').props().type).toBe('signin');
    });

    it('should close modal on Email Sent fetch post success', async () => {
      jest.spyOn(fetchModule, 'fetchResetPassword').mockImplementation(() => ({ message: 'Email Sent' }));

      await act(async () => {
        await waitOneTick(wrapper.find('HeaderModal').invoke('handleSubmitUser')());
      });

      expect(wrapper.find('HeaderModal').exists()).toBe(false);
    });

    it('should show error msg on Email Sent fetch post error', async () => {
      const err = new Error('err');
      jest.spyOn(fetchModule, 'fetchResetPassword').mockImplementation(() => ({ message: 'Reset Error', error: err }));

      await act(async () => {
        await waitOneTick(wrapper.find('HeaderModal').invoke('handleSubmitUser')());
      });

      expect(wrapper.find('HeaderModal').props().type).toBe('reset');
      expect(wrapper.find('HeaderModal').props().errorMsg).toBe('Reset Error');
    });
  });

  describe('Signing Out', () => {
    let wrapper;

    let storage;

    beforeEach(() => {
      wrapper = shallow(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn
          updateSavedCharacters={() => {}}
        />,
      );

      storage = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});
    });

    afterEach(() => {
      storage.mockRestore();
      jest.clearAllMocks();
    });

    it('should be possible to sign out', async () => {
      const stubFetch = jest.spyOn(fetchModule, 'fetchSignOut').mockImplementation(() => ({ message: 'Cookie Cleared' }));

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(stubFetch).toHaveBeenCalled();
      expect(handleSetSignedIn).toHaveBeenCalled();
    });

    it('should clear session storage on sign out', async () => {
      jest.spyOn(fetchModule, 'fetchSignOut').mockImplementation(() => ({ message: 'Cookie Cleared' }));

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(storage).toHaveBeenCalledWith('savedCharacters');
      expect(handleSetSignedIn).toHaveBeenCalled();
    });

    it('should not clear session storage if Cookie Cleared msg not recieved', async () => {
      jest.spyOn(fetchModule, 'fetchSignOut').mockImplementation(() => ({ message: 'something else' }));

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(storage).not.toHaveBeenCalled();
      expect(handleSetSignedIn).not.toHaveBeenCalled();
    });

    it('should not sign out if error', async () => {
      const stubFetch = jest.spyOn(fetchModule, 'fetchSignOut').mockImplementation(() => ({ message: 'Sign Out Error' }));

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(stubFetch).toHaveBeenCalled();
      expect(handleSetSignedIn).not.toHaveBeenCalled();
    });
  });

  describe('burger button in mobile', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    it('should not show burger menu on bigger screens', () => {
      act(() => {
        window.innerWidth = 1000;
        window.dispatchEvent(new Event('resize'));
      });

      wrapper.update();

      expect(wrapper.find('.burger').exists()).toBe(false);
    });

    it('should show burger menu on small screens', () => {
      act(() => {
        window.innerWidth = 799;
        window.dispatchEvent(new Event('resize'));
      });

      wrapper.update();

      expect(wrapper.find('.burger').exists()).toBe(true);
    });

    it('should open dropdown when burger clicked', () => {
      act(() => {
        window.innerWidth = 799;
        window.dispatchEvent(new Event('resize'));
      });

      wrapper.update();

      wrapper.find('.burger').simulate('click');
      expect(wrapper.find('HeaderDropdown').exists()).toBe(true);
    });

    it('should open open sign up modal when burger sign up button clicked', () => {
      act(() => {
        window.innerWidth = 799;
        window.dispatchEvent(new Event('resize'));
      });

      wrapper.update();

      wrapper.find('.burger').simulate('click');

      wrapper.find('button[children="Sign Up"]').simulate('click');

      expect(wrapper.find('HeaderModal').props().type).toBe('signup');
    });

    it('should open open sign up modal when burger sign up button clicked', () => {
      act(() => {
        window.innerWidth = 799;
        window.dispatchEvent(new Event('resize'));
      });

      wrapper.update();

      wrapper.find('.burger').simulate('click');

      wrapper.find('button[children="Sign In"]').simulate('click');

      expect(wrapper.find('HeaderModal').props().type).toBe('signin');
    });
  });
});
