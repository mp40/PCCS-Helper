import { removeAllWeaponsReducer } from './index';
import { MockState } from '../mockState';

const mockM1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const mockM16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

const mockLightGrenades = {
  name: 'L2 A2',
  qty: 2,
  weight: 0.9,
};

const mockHeavyGrenade = {
  name: 'TNT',
  qty: 1,
  weight: 10,
};

const mockM79 = {
  name: 'M79',
  weight: 6.5,
  qty: 1,
  mag: [{ class: 'HEAT', weight: 0.51, qty: 2 }, { class: 'HE', weight: 0.51, qty: 0 }],
};

const mockM72 = {
  name: 'M72',
  weight: 5.2,
  qty: 1,
  mag: [{ weight: '-' }],
};

describe('removeAllWeaponsReducer function', () => {
  let state = new MockState();

  it('should remove all weapons from list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM16, mockM1911],
        grenades: [mockLightGrenades, mockHeavyGrenade],
        launchers: [mockM79, mockM72],
      } };

    const action = { payload: [] };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [],
        grenades: [],
        launchers: [],
      } };

    state = removeAllWeaponsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
