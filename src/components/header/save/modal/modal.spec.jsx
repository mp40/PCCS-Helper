import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';

import HeaderSaveModal from './component';
import ConnectedHeaderSaveModal from '.';

import { buildRequestPayload } from './data';

import { URL_CHARACTERS } from '../../../../fetch/constants';

import { getStore, testM72 } from '../../../../helpers/testHelpers';
import { NewCharacter } from '../../../../reducers/newCharacter';
import { MockState } from '../../../../reducers/mockState';

const testM1911A1WithMods = () => ({
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
  modNotes: [{ note: 'test', weightMod: 1 }],
});

const waitOneTick = (simulate) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
});

const updated_at = '2020-11-19T23:38:39.423Z';

const mockCharacter1 = { character_name: 'Biggles', character_id: 1, updated_at };

const mockCharacter2 = { character_name: 'Algy', character_id: 2, updated_at };

const mockCharacter3 = { character_name: 'Ginger', character_id: 3, updated_at };

const mockCharacter4 = { character_name: 'Watkins', character_id: 4, updated_at };

const mockCharacter5 = { character_name: 'Smyth', character_id: 5, updated_at };

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

const getCharacter = () => {
  const newCharacter = new NewCharacter();

  return { ...newCharacter,
    character_id: 1,
    equipment: [{ name: 'test eqp', qty: 1 }],
    firearms: [testM1911A1WithMods()],
    grenades: [grenade()],
    launchers: [testM72()] };
};

describe('Save Character Modal', () => {
  let wrapper;

  const setShowSaveCharacter = jest.fn();
  const addSavedCharacter = jest.fn();
  const updateSavedCharacter = jest.fn();

  const getWrapper = (characters) => shallow(
    <HeaderSaveModal
      characters={characters}
      currentCharacter={getCharacter()}
      setShowSaveCharacter={setShowSaveCharacter}
      addSavedCharacter={addSavedCharacter}
      updateSavedCharacter={updateSavedCharacter}
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

      expect(wrapper.find('button').find(`span[children="${mockCharacter1.character_name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter2.character_name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter3.character_name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter4.character_name}"]`).exists()).toBe(true);
      expect(wrapper.find('button').find(`span[children="${mockCharacter5.character_name}"]`).exists()).toBe(true);
    });

    it('should show last update timestamp', () => {
      jest.spyOn(Date.prototype, 'getFullYear').mockImplementation(() => 2020);
      jest.spyOn(Date.prototype, 'getMonth').mockImplementation(() => 10);
      jest.spyOn(Date.prototype, 'getDate').mockImplementation(() => 20);

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
    let stubGetStorage;

    beforeEach(() => {
      stubGetStorage = jest.spyOn(Storage.prototype, 'getItem')
        .mockImplementation(() => JSON.stringify(
          [
            mockCharacter1,
            mockCharacter2,
          ],
        ));

      wrapper = getWrapper([mockCharacter1, mockCharacter2]);
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

    it('should store new character on frontend', async () => {
      const postedCharacter = {
        character_name: 'test name',
        character_id: 3,
        updated_at: '2020-12-20T23:38:39.423Z',
      };

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ character: postedCharacter }),
      }));

      const spy = jest.spyOn(Storage.prototype, 'setItem');

      await act(async () => {
        await waitOneTick(wrapper.find('button[children="New"]').simulate('click'));
      });

      expect(spy).toHaveBeenCalledWith('savedCharacters', JSON.stringify([
        mockCharacter1,
        mockCharacter2,
        postedCharacter,
      ]));

      expect(addSavedCharacter).toHaveBeenCalledWith(postedCharacter);
    });

    it('should not update session storage if getItem returns null', async () => {
      const postedCharacter = {
        character_name: 'test name',
        character_id: 3,
        updated_at: '2020-12-20T23:38:39.423Z',
      };

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ character: postedCharacter }),
      }));

      stubGetStorage = jest.spyOn(Storage.prototype, 'getItem')
        .mockImplementation(() => null);

      const spy = jest.spyOn(Storage.prototype, 'setItem');

      await act(async () => {
        await waitOneTick(wrapper.find('button[children="New"]').simulate('click'));
      });

      expect(spy).not.toHaveBeenCalled();

      expect(addSavedCharacter).toHaveBeenCalledWith(postedCharacter);
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
    let stubGetStorage;

    beforeEach(() => {
      stubGetStorage = jest.spyOn(Storage.prototype, 'getItem')
        .mockImplementation(() => JSON.stringify(
          [
            mockCharacter1,
            mockCharacter2,
          ],
        ));

      wrapper = getWrapper([mockCharacter1, mockCharacter2]);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should update character slot', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ character:
          {
            character_name: 'test name',
            character_id: 1,
          } }),
      }));

      const endpoint = URL_CHARACTERS;

      wrapper.find('span[children="Biggles"]').parent().simulate('click');

      expect(fetch).toHaveBeenCalledWith(
        `${endpoint}/1`,
        expect.anything(),
      );
    });

    it('should update the character data on frontend when put character', async () => {
      const putCharacter = {
        character_name: 'test name',
        character_id: 1,
        updated_at: '2020-12-20T23:38:39.423Z',
      };

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ character: putCharacter }),
      }));

      const spy = jest.spyOn(Storage.prototype, 'setItem');

      await act(async () => {
        await waitOneTick(wrapper.find('span[children="Biggles"]').parent().simulate('click'));
      });

      expect(spy).toHaveBeenCalledWith('savedCharacters', JSON.stringify([
        putCharacter,
        mockCharacter2,
      ]));

      expect(updateSavedCharacter).toHaveBeenCalledWith(putCharacter);
    });

    it('should not update session storage if getItem returns null', async () => {
      const putCharacter = {
        character_name: 'test name',
        character_id: 1,
        updated_at: '2020-12-20T23:38:39.423Z',
      };

      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({ character: putCharacter }),
      }));

      stubGetStorage = jest.spyOn(Storage.prototype, 'getItem')
        .mockImplementation(() => null);

      const spy = jest.spyOn(Storage.prototype, 'setItem');

      await act(async () => {
        await waitOneTick(wrapper.find('span[children="Biggles"]').parent().simulate('click'));
      });

      expect(spy).not.toHaveBeenCalled();

      expect(updateSavedCharacter).toHaveBeenCalledWith(putCharacter);
    });

    it('should close save modal on successful update', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character: { character_name: 'test name', character_id: 1 },
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

  describe('intergration tests', () => {
    let stubGetStorage;

    beforeEach(() => {
      stubGetStorage = jest.spyOn(Storage.prototype, 'getItem')
        .mockImplementation(() => null);

      const mockState = new MockState();
      mockState.savedCharacters = [{ character_name: 'Charles', character_id: 1, updated_at: '2020-12-20T23:38:39.423Z' }];

      const store = getStore(mockState);

      wrapper = mount(
        <Provider store={store}>
          <ConnectedHeaderSaveModal
            setShowSaveCharacter={setShowSaveCharacter}
          />
        </Provider>,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should save new character', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character: { character_name: 'Winston', character_id: 2, updated_at: '2020-12-25T23:38:39.423Z' },
        }),
      }));

      await act(async () => {
        await waitOneTick(wrapper.find('button[children="New"]').simulate('click'));
      });

      wrapper.update();

      expect(wrapper.text()).toContain('Winston');
    });

    it('should update character', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        text: () => JSON.stringify({
          character: { character_name: 'Updated Charles', character_id: 1, updated_at: '2020-12-25T23:38:39.423Z' },
        }),
      }));

      await act(async () => {
        await waitOneTick(wrapper.find('button').at(1).simulate('click'));
      });

      wrapper.update();

      expect(wrapper.text()).toContain('Updated Charles');
    });
  });
});

describe('building request payload', () => {
  it('should only send the required stats', () => {
    const payload = buildRequestPayload(getCharacter());

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
    const payload = buildRequestPayload(getCharacter());

    expect(payload.firearms).toEqual([
      {
        name: testM1911A1WithMods().name,
        qty: testM1911A1WithMods().qty,
        mag: testM1911A1WithMods().mag,
        modNotes: testM1911A1WithMods().modNotes,
      },
    ]);
  });

  it('should store optic if attached', () => {
    const m16WithScope = {
      name: 'M16',
      qty: 1,
      mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
      attachedOptic: 'Low Power Scope',
    };

    const character = getCharacter();
    character.firearms = [{ ...m16WithScope }];

    const payload = buildRequestPayload(character);

    expect(payload.firearms).toEqual([
      {
        name: m16WithScope.name,
        qty: m16WithScope.qty,
        mag: m16WithScope.mag,
        modNotes: m16WithScope.modNotes,
        attachedOptic: m16WithScope.attachedOptic,
      },
    ]);
  });

  it('should store underslung launcher if attached', () => {
    const m203 = {
      attached: 'M203',
      mag: [{ qty: 0 }, { qty: 2 }],
    };

    const m16WithM203 = {
      name: 'M16',
      qty: 1,
      mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
      launcher: m203,
    };

    const character = getCharacter();
    character.firearms = [{ ...m16WithM203 }];

    const payload = buildRequestPayload(character);

    expect(payload.firearms).toEqual([
      {
        name: m16WithM203.name,
        qty: m16WithM203.qty,
        mag: m16WithM203.mag,
        modNotes: m16WithM203.modNotes,
        launcher: m16WithM203.launcher,
      },
    ]);
  });

  it('should remove unneeded grenade information', () => {
    const payload = buildRequestPayload(getCharacter());

    expect(payload.grenades).toEqual([
      {
        name: grenade().name,
        qty: grenade().qty,
      },
    ]);
  });

  it('should remove unneeded launchers information', () => {
    const payload = buildRequestPayload(getCharacter());

    expect(payload.launchers).toEqual([
      {
        name: testM72().name,
        qty: testM72().qty,
        mag: testM72().mag,
      },
    ]);
  });
});
