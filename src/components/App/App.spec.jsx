import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import App from './component';

import * as fetchModule from '../../fetch';

const mrLove = {
  character_id: 69,
  character_name: 'Mr Love',
  updated_at: new Date().toISOString(),
};

const mrRock = {
  character_id: 666,
  character_name: 'Mr Rock',
  updated_at: new Date().toISOString(),
};

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

describe('mounting component', () => {
  let wrapper;
  let useEffect;
  let storage;

  const updateSavedCharacters = jest.fn();

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(async () => {
    useEffect = jest.spyOn(React, 'useEffect');

    storage = jest.spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => JSON.stringify(
        [
          mrLove,
          mrRock,
        ],
      ));
  });

  afterEach(() => {
    storage.mockRestore();
    jest.clearAllMocks();
  });

  it('should pass prop signedIn as false if user has not signed in', async () => {
    jest.spyOn(fetchModule, 'fetchSignedIn').mockImplementation(() => ({
      message: 'SignedIn Error',
    }));

    mockUseEffect();

    await act(async () => {
      await waitOneTick((wrapper = await shallow(
        <App
          currentView="home"
          updateSavedCharacters={() => {}}
        />,
      )));
    });

    expect(wrapper.find('Connect(Header)').prop('signedIn')).toBe(false);
  });

  it('should pass prop signedIn as true if user has signed in', async () => {
    jest.spyOn(fetchModule, 'fetchSignedIn').mockImplementation(() => ({
      message: 'Signed In',
    }));

    mockUseEffect();

    await act(async () => {
      await waitOneTick((wrapper = await shallow(
        <App
          currentView="home"
          updateSavedCharacters={() => {}}
        />,
      )));
    });

    expect(wrapper.find('Connect(Header)').prop('signedIn')).toBe(true);
  });

  it('should update saved characters from session storage in store if user has signed in', async () => {
    jest.spyOn(fetchModule, 'fetchSignedIn').mockImplementation(() => ({
      message: 'Signed In',
    }));

    mockUseEffect();

    await act(async () => {
      await waitOneTick((wrapper = await shallow(
        <App
          currentView="home"
          updateSavedCharacters={updateSavedCharacters}
        />,
      )));
    });

    expect(updateSavedCharacters).toHaveBeenCalledWith([mrLove, mrRock]);
  });

  it('should fetch saved characters if not in session storage if user has signed in', async () => {
    jest.spyOn(fetchModule, 'fetchSignedIn').mockImplementation(() => ({
      message: 'Signed In',
    }));

    jest.spyOn(fetchModule, 'fetchGetCharacters').mockImplementation(() => ({
      characters: [mrLove, mrRock],
    }));

    storage = jest.spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => null);

    mockUseEffect();

    await act(async () => {
      await waitOneTick((wrapper = await shallow(
        <App
          currentView="home"
          updateSavedCharacters={updateSavedCharacters}
        />,
      )));
    });

    expect(updateSavedCharacters).toHaveBeenCalledWith([mrLove, mrRock]);
  });
});

describe('handleSetSignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App
        currentView="home"
        updateSavedCharacters={() => {}}
      />,
    );
  });

  it('should update signedIn value when handleSetSignedIn is called', () => {
    expect(wrapper.find('Connect(Header)').prop('signedIn')).toBe(false);

    wrapper.find('Connect(Header)').invoke('handleSetSignedIn')();

    expect(wrapper.find('Connect(Header)').prop('signedIn')).toBe(true);
  });
});
