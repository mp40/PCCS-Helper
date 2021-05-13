import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import App from './component';

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

  const stubCharactersFromStorage = () => {
    storage = jest.spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => JSON.stringify(
        [
          mrLove,
          mrRock,
        ],
      ));
  };

  const stubNullFromStorage = () => {
    storage = jest.spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => null);
  };

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(async () => {
    useEffect = jest.spyOn(React, 'useEffect');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should pass prop signedIn as false if user has not signed in', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      text: () => JSON.stringify({
        message: 'SignedIn Error',
      }),
    }),
    );

    stubCharactersFromStorage();

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
    global.fetch = jest.fn(() => Promise.resolve({
      text: () => JSON.stringify({
        message: 'Signed In',
      }),
    }),
    );

    stubCharactersFromStorage();

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
    global.fetch = jest.fn(() => Promise.resolve({
      text: () => JSON.stringify({
        message: 'Signed In',
      }),
    }),
    );

    stubCharactersFromStorage();

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
    global.fetch = jest.fn()
      .mockImplementationOnce(() => Promise.resolve({
        text: () => JSON.stringify({
          message: 'Signed In',
        }),
      }),
      )
      .mockImplementationOnce(() => Promise.resolve({
        text: () => JSON.stringify({
          characters: [mrLove, mrRock],
        }),
      }));

    stubNullFromStorage();

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

describe('App Views', () => {
  it('should render the home page', () => {
    const wrapper = shallow(
      <App
        currentView="home"
        updateSavedCharacters={() => {}}
      />,
    );

    expect(wrapper.find('Connect(HomePage)').exists()).toBe(true);
  });

  it('should render the create character page', () => {
    const wrapper = shallow(<App currentView="createChar" updateSavedCharacters={() => {}} />);

    expect(wrapper.find('Connect(CharacterGeneration)').exists()).toBe(true);
  });

  it('should render the print page', () => {
    const wrapper = shallow(<App currentView="printRefSheet" updateSavedCharacters={() => {}} />);

    expect(wrapper.find('Connect(GameSheet)').exists()).toBe(true);
  });

  it('should render the loaded character page', () => {
    const wrapper = shallow(<App currentView="playCharacter" updateSavedCharacters={() => {}} />);

    expect(wrapper.find('Connect(LoadedCharacter)').exists()).toBe(true);
  });
});
