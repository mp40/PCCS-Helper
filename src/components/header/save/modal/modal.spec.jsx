import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';

import HeaderSaveModal from './component';
import ConnectedHeaderSaveModal from '.';

import { buildRequestPayload } from './data';

import { getStore, testM1911A1WithMods, testM72 } from '../../../../helpers/testHelpers';
import { NewCharacter } from '../../../../reducers/newCharacter';

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

const updated_at = '2020-11-19T23:38:39.423Z';

const mockCharacter1 = { name: 'Biggles', character_id: 1, updated_at };

const mockCharacter2 = { name: 'Algy', character_id: 2, updated_at };

const mockCharacter3 = { name: 'Ginger', character_id: 3, updated_at };

const mockCharacter4 = { name: 'Watkins', character_id: 4, updated_at };

const mockCharacter5 = { name: 'Smyth', character_id: 5, updated_at };

const grenade = () => ({
  name: 'L2 A2',
  qty: 1,
  length: 3.3,
  weight: 0.9,
  at: 3,
  fl: 2,
  r: 16,
  data: {},
  heading: 'standard',
});

const character = () => {
  const newCharacter = new NewCharacter();

  return { ...newCharacter,
    equipment: [{ name: 'test eqp', qty: 1 }],
    firearms: [testM1911A1WithMods()],
    grenades: [grenade()],
    launchers: [testM72()] };
};

describe('Save Character Modal', () => {
  let wrapper;

  const setShowSaveCharacter = jest.fn();

  const getWrapper = (characters) => shallow(
    <HeaderSaveModal
      characters={characters}
      currentCharacter={character()}
      setShowSaveCharacter={setShowSaveCharacter}
    />);

  describe('the modal', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should close the modal', () => {
      wrapper = getWrapper([]);
      wrapper.find('.close').simulate('click');

      expect(setShowSaveCharacter).toHaveBeenCalledWith(false);
    });

    it('should render peviously saved characters', () => {
      wrapper = getWrapper([
        mockCharacter1,
        mockCharacter2,
        mockCharacter3,
        mockCharacter4,
        mockCharacter5,
      ]);

      expect(wrapper.find('button').find(`span[children="${mockCharacter1.name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter2.name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter3.name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter4.name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter5.name}"]`).exists()).toBe(true);
    });

    it('should show last update timestamp', () => {
      wrapper = getWrapper([
        mockCharacter1,
      ]);

      expect(wrapper.find('button').at(1).text()).toContain('20/11/2020');
    });

    it('should render a single new slot if no saved characters', () => {
      wrapper = getWrapper([]);

      expect(wrapper.find('button[children="New"]').exists()).toBe(true);
      expect(wrapper.find('button[children="New"]').length).toBe(1);
    });

    it('should render new slot if less than five saved characters', () => {
      wrapper = getWrapper([
        mockCharacter1,
        mockCharacter2,
        mockCharacter3,
        mockCharacter4,
      ]);

      expect(wrapper.find('button[children="New"]').exists()).toBe(true);
    });
  });

  describe('saving a character', () => {
    beforeEach(() => {
      wrapper = getWrapper([]);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should save new characters', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character_name: 'test name',
        }),
      }));

      wrapper.find('button[children="New"]').simulate('click');

      expect(fetch).toHaveBeenCalled();
    });

    it('should close save modal on successful save', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character_name: 'test name',
        }),
      }));

      await act(async () => {
        await waitOneTick(wrapper.find('button[children="New"]').simulate('click'));
      });

      expect(setShowSaveCharacter).toHaveBeenCalledWith(false);
    });

    it('should not close save modal on unsuccessful save', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      await act(async () => {
        await waitOneTick(wrapper.find('button[children="New"]').simulate('click'));
      });

      expect(setShowSaveCharacter).not.toHaveBeenCalled();
    });

    it('should display save error message on error', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      await act(async () => {
        await waitOneTick(wrapper.find('button[children="New"]').simulate('click'));
      });

      expect(wrapper.text()).toContain('Save Error');
    });
  });

  describe('updating a character slot', () => {
    beforeEach(() => {
      wrapper = getWrapper([mockCharacter1]);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should update character slot', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character_name: 'test name',
        }),
      }));

      wrapper.find('span[children="Biggles"]').parent().simulate('click');

      expect(fetch).toHaveBeenCalled();
    });

    it('should close save modal on successful update', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character_name: 'test name',
        }),
      }));

      await act(async () => {
        await waitOneTick(wrapper.find('span[children="Biggles"]').parent().simulate('click'));
      });

      expect(setShowSaveCharacter).toHaveBeenCalledWith(false);
    });

    it('should not close the modal on unsuccessful update', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      await act(async () => {
        await waitOneTick(wrapper.find('span[children="Biggles"]').parent().simulate('click'));
      });

      expect(setShowSaveCharacter).not.toHaveBeenCalled();
    });

    it('should display save error message on error', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));

      await act(async () => {
        await waitOneTick(wrapper.find('span[children="Biggles"]').parent().simulate('click'));
      });

      expect(wrapper.text()).toContain('Save Error');
    });
  });

  describe('intergration test', () => {
    const store = getStore();

    wrapper = mount(
      <Provider store={store}>
        <ConnectedHeaderSaveModal
          setShowSaveCharacter={setShowSaveCharacter}
        />
      </Provider>,
    );

    it('should render', () => {
      expect(wrapper.find('button[children="New"]').exists()).toBe(true);
    });
  });
});

describe('building request payload', () => {
  it('should only send the required stats', () => {
    const payload = buildRequestPayload(character());

    const requiredKeys = [
      'character_name',
      'str',
      'int',
      'hlt',
      'wil',
      'agi',
      'gun_level',
      'hand_level',
      'uniform',
      'helmet',
      'vest',
      'equipment',
      'firearms',
      'grenades',
      'launchers',
      'notes',
    ];

    expect(Object.keys(payload)).toEqual(requiredKeys);
  });

  it('should remove unneeded firearms information', () => {
    const payload = buildRequestPayload(character());

    expect(payload.firearms).toEqual([
      {
        name: testM1911A1WithMods().name,
        qty: testM1911A1WithMods().qty,
        mag: testM1911A1WithMods().mag,
        modNotes: testM1911A1WithMods().modNotes,
      },
    ]);
  });

  it('should remove unneeded grenade information', () => {
    const payload = buildRequestPayload(character());

    expect(payload.grenades).toEqual([
      {
        name: grenade().name,
        qty: grenade().qty,
      },
    ]);
  });

  it('should remove unneeded launchers information', () => {
    const payload = buildRequestPayload(character());

    expect(payload.launchers).toEqual([
      {
        name: testM72().name,
        qty: testM72().qty,
        mag: testM72().mag,
      },
    ]);
  });
});
