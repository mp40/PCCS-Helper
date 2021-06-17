import { viewCreateCharacterReducer } from './index';
import { MockState } from '../mockState';

const mockM16 = (ammo1, ammo2) => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: ammo1 },
    { type: 'Mag', weight: 1, cap: 30, qty: ammo2 },
  ],
});

const mockLightGrenade = (qty) => ({
  name: 'L2 A2',
  qty,
  weight: 0.9,
});

const mockM72 = (qty) => ({
  name: 'M72',
  weight: 5.2,
  qty,
  mag: [{ weight: '-' }],
});

describe('view Character Reducer', () => {
  const action = { payload: 'createChar' };

  it('should update view', () => {
    let state = new MockState();

    state = viewCreateCharacterReducer(state, action);

    expect(state.currentView).toBe('createChar');
  });

  it('should have a blank character', () => {
    let state = new MockState();

    const m16 = mockM16(2, 1);

    const lightGrenades = mockLightGrenade(2);

    const m72 = mockM72(2);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        name: 'Biggles',
        firearms: [m16],
        grenades: [lightGrenades],
        launchers: [m72],
      } };

    const updatedState = { ...state,
      currentView: action.payload,
      currentCharacter: {
        ...state.currentCharacter,
        name: '',
        firearms: [],
        grenades: [],
        launchers: [],
      } };

    state = viewCreateCharacterReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
