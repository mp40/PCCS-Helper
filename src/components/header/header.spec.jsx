import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { Provider } from 'react-redux';
import { getStoreWithGun } from '../../helpers/testHelpers';

import ConnectedHeader from '.';

import Header from './component';

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

describe('The Header', () => {
  const handleSetSignedIn = jest.fn();

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

      await act(async () => {
        await waitOneTick(
          wrapper.find('HeaderButtons').invoke('handleSignOut')(),
        );
      });

      expect(fetch).toHaveBeenCalled();
      expect(handleSetSignedIn).toHaveBeenCalled();
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

      act(() => {
        window.innerWidth = 799;
        window.dispatchEvent(new Event('resize'));
      });
    });

    it('should open dropdown when burger clicked', () => {
      wrapper.update();
      wrapper.find('.burger').simulate('click');
      expect(wrapper.find('HeaderDropdown').exists()).toBe(true);
    });
  });

  describe('Create Character Header', () => {
    const currentView = 'createChar';
    const totalWeight = 6.66;

    const wrapper = shallow(
      <Header
        currentView={currentView}
        totalWeight={totalWeight}
        handleSetSignedIn={handleSetSignedIn}
        selectCurrentView={() => {}}
        updateSavedCharacters={() => {}}
        signedIn={false}
      />,
    );

    it('should render the title', () => {
      expect(wrapper.find('HeaderCreateCharacter').dive().text()).toContain(
        'Create Character',
      );
    });

    it('should render the total weight', () => {
      expect(wrapper.find('HeaderCreateCharacter').dive().text()).toContain(
        '6.66',
      );
    });
  });

  describe('Header Print intergration test', () => {
    const store = getStoreWithGun({ weight: 1 });

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedHeader
          signedIn={false}
          handleSetSignedIn={() => {}}
        />
      </Provider>,
    );

    it('should update view when print is clicked', () => {
      wrapper.find('.print-button').simulate('click');

      expect(wrapper.find('Header').prop('currentView')).toBe('printRefSheet');
      wrapper.update();
    });
  });
});
