import { removeFirearmReducer } from './index';
import { MockState } from '../mockState';

const mockM1911A1 = (qty, ammo) => ({
  name: 'M1911A1',
  qty,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: ammo }],
});

const mockM16 = () => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
  ],
});

describe('removeFirearmReducer function', () => {
  let state = new MockState();

  it('should return correct values when a gun removed from list', () => {
    const m1911A1 = mockM1911A1(2, 4);
    const weaponWeight = m1911A1.weight * m1911A1.qty;
    const ammoWeight = m1911A1.mag[0].weight * m1911A1.mag[0].qty;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + weaponWeight + ammoWeight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [m1911A1],
      } };

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

    const action = { payload: m1911A1 };

    state = removeFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when firearm removed from list with more than one type of gun', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM16().weight + mockM1911A1(1, 0).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16(), mockM1911A1(1, 0)],
      } };

    const action = { payload: mockM1911A1(1, 0) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM16().weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        firearms: [mockM16()],
      } };

    state = removeFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
