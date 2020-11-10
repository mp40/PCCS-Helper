import { removeAllFirearmsReducer } from './index';
import { MockState } from '../mockState';

const mockM1911A1 = (ammo) => ({
  name: 'M1911A1',
  qty: 1,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: ammo }],
});

const mockM16 = (ammo1, ammo2) => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: ammo1 },
    { type: 'Mag', weight: 1, cap: 30, qty: ammo2 },
  ],
});

describe('removeAllFirearmsReducer function', () => {
  let state = new MockState();

  it('should return correct values when all firearms removed from list', () => {
    const m16 = mockM16(2, 1);
    const m1911A1 = mockM1911A1(1);
    const ammoWeight = (m16.mag[0].qty + m16.mag[0].weight)
    + (m16.mag[1].qty + m16.mag[1].weight)
    + (m1911A1.mag[0].qty + m1911A1.mag[0].weight);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + m16.weight + m1911A1.weight + ammoWeight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16(2, 1), mockM1911A1(1)],
      } };

    const action = { payload: [] };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5,
        baseSpeed: 3,
        maxSpeed: 6,
        gunCombatActions: 4,
        handCombatActions: 4,
        firearms: [],
      } };

    state = removeAllFirearmsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
