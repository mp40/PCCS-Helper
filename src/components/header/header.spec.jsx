import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Header from './component';

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
          selectCurrentView={() => {}}
          updateSavedCharacters={() => {}}
          currentView="createChar"
        />,
      );
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
  });

  describe('sign up modal', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          selectCurrentView={() => {}}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should open sign up modal when Sign Up clicked', () => {
      wrapper.find('button').at(0).simulate('click');
      const title = wrapper.find('HeaderModal').find('div').at(2);

      expect(title.text()).toBe('Sign Up');
    });

    it('should be possible to close modal', () => {
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('.close').simulate('click');

      expect(wrapper.find('HeaderModal').exists()).toBe(false);
    });

    it('should be possible to switch modal', () => {
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('.switchModal').simulate('click');

      const title = wrapper.find('HeaderModal').find('div').at(2);

      expect(title.text()).toContain('Sign In');
    });

    it('should close modal on sign up', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({
          id: '1',
          email: 'testSan@gmail.com',
          password: 'hashed_password',
        }),
      }),
      );

      wrapper.find('button').at(0).simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(wrapper.text()).not.toContain('Email');
      expect(wrapper.text()).not.toContain('Password');
    });

    it('should not close modal on sign up error', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({
          error: 'error',
          message: 'Signup Error',
        }),
      }),
      );

      wrapper.find('button').at(0).simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(wrapper.text()).toContain('Email');
      expect(wrapper.text()).toContain('Password');
    });
  });

  describe('sign in modal', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn={false}
          selectCurrentView={() => {}}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should open sign in modal', () => {
      wrapper.find('button').at(1).simulate('click');
      const title = wrapper.find('HeaderModal').find('div').at(2);

      expect(title.text()).toContain('Sign In');
    });

    it('should be possible to close modal', () => {
      wrapper.find('button').at(1).simulate('click');
      wrapper.find('.close').simulate('click');

      expect(wrapper.find('HeaderModal').exists()).toBe(false);
    });

    it('should be possible to switch modal', () => {
      wrapper.find('button').at(1).simulate('click');
      wrapper.find('.switchModal').simulate('click');

      const title = wrapper.find('HeaderModal').find('div').at(2);

      expect(title.text()).toContain('Sign Up');
    });

    it('should be possible to sign in', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Signed In' }),
      }),
      );

      wrapper.find('button').at(1).simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(handleSetSignedIn).toHaveBeenCalled();
    });

    it('should store saved characters from database to session storage', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Signed In' }),
      }),
      );

      const spy = jest.spyOn(Storage.prototype, 'setItem');

      wrapper.find('button').at(1).simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(spy).toHaveBeenCalledWith('savedCharacters', undefined);
    });

    it('should not close modal on sign up error', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({
          error: 'error',
          message: 'Signup Error',
        }),
      }),
      );

      wrapper.find('button').at(1).simulate('click');

      wrapper
        .find('input')
        .at(0)
        .simulate('change', { target: { value: 'test@gmail.com' } });

      wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value: 'password' } });

      await act(async () => {
        await waitOneTick(wrapper.find('form').simulate('submit'));
      });

      wrapper.update();

      expect(handleSetSignedIn).not.toHaveBeenCalled();

      expect(wrapper.text()).toContain('Email');
      expect(wrapper.text()).toContain('Password');
    });
  });

  describe('Signing Out', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Header
          handleSetSignedIn={handleSetSignedIn}
          signedIn
          selectCurrentView={() => {}}
          updateSavedCharacters={() => {}}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be possible to sign out', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Cookie Cleared' }),
      }),
      );

      jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(fetch).toHaveBeenCalled();
      expect(handleSetSignedIn).toHaveBeenCalled();
    });

    it('should clear session storage on sign out', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Cookie Cleared' }),
      }),
      );

      const spy = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(spy).toHaveBeenCalledWith('savedCharacters');
      expect(handleSetSignedIn).toHaveBeenCalled();
    });

    it('should not clear session storage if Cookie Cleared msg not recieved', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'something else' }),
      }),
      );

      const spy = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(spy).not.toHaveBeenCalled();
      expect(handleSetSignedIn).not.toHaveBeenCalled();
    });

    it('should not sign out if error', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        text: () => JSON.stringify({ message: 'Sign Out Error' }),
      }),
      );

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(fetch).toHaveBeenCalled();
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
          selectCurrentView={() => {}}
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
  });
});