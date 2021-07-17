import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Reset from './index';

import * as fetchModule from '../../fetch';

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

describe('Save Character Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Reset />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to navigate to home', () => {
    const spy = jest.spyOn(window.history, 'pushState').mockImplementation(() => {});

    wrapper.find('HeaderModal').invoke('handleSwitchModal')();

    expect(spy).toHaveBeenCalledWith({}, '', '/');
  });

  it('should be able to navigate to home', () => {
    jest.spyOn(window.history, 'pushState').mockImplementation(() => {});

    const stub = jest.spyOn(fetchModule, 'fetchResettingPassword').mockImplementation(() => {});

    wrapper.find('HeaderModal').invoke('handleSubmitUser')({ email: 'a@b', password: 'wayCoolPW' });

    expect(stub).toHaveBeenCalledWith('a@b', 'wayCoolPW', expect.anything());
  });

  it('should set error msg on error navigate home after submitting new password', async () => {
    jest.spyOn(window.history, 'pushState').mockImplementation(() => {});

    const err = new Error();
    jest.spyOn(fetchModule, 'fetchResettingPassword').mockImplementation(() => ({ error: err, message: 'Reset Error' }));

    await act(async () => {
      await waitOneTick(wrapper.find('HeaderModal').invoke('handleSubmitUser')({ email: 'a@b', password: 'wayCoolPW' }));
    });

    wrapper.update();

    expect(wrapper.find('HeaderModal').props().errorMsg).toBe('Reset Error');
  });

  it('should navigate home after submitting new password', async () => {
    const spy = jest.spyOn(window.history, 'pushState').mockImplementation(() => {});

    jest.spyOn(fetchModule, 'fetchResettingPassword').mockImplementation(() => ({ message: 'Yay!' }));

    await act(async () => {
      await waitOneTick(wrapper.find('HeaderModal').invoke('handleSubmitUser')({ email: 'a@b', password: 'wayCoolPW' }));
    });

    wrapper.update();

    expect(spy).toHaveBeenCalledWith({}, '', '/');
  });

  it('should call noop when handleShowModal invoked', async () => {
    const spy = jest.spyOn(window.history, 'pushState').mockImplementation(() => {});
    const stub = jest.spyOn(fetchModule, 'fetchResettingPassword')
      .mockImplementation(() => {});

    wrapper.find('HeaderModal').invoke('handleShowModal')();

    expect(spy).not.toHaveBeenCalled();
    expect(stub).not.toHaveBeenCalled();
  });
});
