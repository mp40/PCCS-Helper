import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { Provider } from 'react-redux';
import { getStore } from '../../helpers/testHelpers';

import LoadCharacterModal from './component';
import App from '../App';

import * as fetchModule from '../../fetch';

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

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

describe('Load Character Modal', () => {
  const closeModal = jest.fn();
  const hydrateCurrentCharacter = jest.fn();

  const savedCharacters = [mrLove, mrRock];

  let wrapper;
  let storage;

  const getWrapper = (characters) => {
    wrapper = shallow(
      <LoadCharacterModal
        closeModal={closeModal}
        hydrateCurrentCharacter={hydrateCurrentCharacter}
        savedCharacters={characters}
      />,
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render list of saved characters', () => {
    getWrapper(savedCharacters);

    expect(wrapper.find('button').find('span[children="Mr Love"]').exists()).toBe(true);
    expect(wrapper.find('button').find('span[children="Mr Rock"]').exists()).toBe(true);
  });

  it('should load saved character when button clicked', () => {
    getWrapper(savedCharacters);

    wrapper.find('span[children="Mr Love"]').parent().simulate('click');

    expect(closeModal).toHaveBeenCalled();
    expect(hydrateCurrentCharacter).toHaveBeenCalledWith(mrLove);
  });

  it('should render msg if no saved characters found', () => {
    getWrapper([]);

    expect(wrapper.find('button').find('span').exists()).toBe(false);
    expect(wrapper.text()).toContain('No Saved Characters Found');
  });

  it('should be possible to close modal', () => {
    getWrapper([]);

    wrapper.find('.close').simulate('click');

    expect(closeModal).toHaveBeenCalled();
  });
});

describe('Load Character Intergration', () => {
  let wrapper;

  window.history.pushState({}, '', '/use');

  const mrLoad = {
    character_id: 1337,
    character_name: 'Mr Load',
    updated_at: new Date().toISOString(),
    str: 14,
    int: 10,
    hlt: 10,
    wil: 10,
    agi: 12,
    gun_level: 4,
    hand_level: 2,
    uniform: 'Normal',
    helmet: null,
    vest: null,
    equipment: [],
    firearms: [],
    grenades: [],
    launchers: [],
    notes: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    window.history.pushState({}, '', '/');
  });

  it('should load hydrated character', async () => {
    jest.spyOn(fetchModule, 'fetchSignedIn').mockImplementation(() => ({ message: 'Signed In' }));

    jest.spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => JSON.stringify(
        [
          mrLove,
          mrRock,
          mrLoad,
        ],
      ));

    await act(async () => {
      await waitOneTick((wrapper = await mount(
        <Provider store={getStore()}>
          <App />
        </Provider>,
      )));
    });

    wrapper.update();

    wrapper.find('IconButton').simulate('click');
    wrapper.find('button').find('span[children="Mr Load"]').simulate('click');

    expect(wrapper.find('LoadedCharacter').exists()).toBe(true);
    expect(wrapper.text()).toContain('Mr Load');
  });
});
