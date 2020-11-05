import { MockState } from '../mockState';
import { increaseFirearmReducer } from './index';

const mockM1911A1 = (qty = 1) => ({
  name: 'M1911A1',
  qty,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
});

const mockM16 = (qty = 1) => ({
  name: 'M16',
  qty,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
  ],
});

describe('increaseFirearmReducer function', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      totalWeight: state.currentCharacter.totalWeight + mockM1911A1(1).weight,
      firearms: [mockM1911A1(1)],
    } };

  it('should increase quantity of the gun by one', () => {
    const action = { payload: mockM1911A1(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1(1).weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM1911A1(2)],
      } };

    state = increaseFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target gun in array with more than item', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1(1).weight + mockM16().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM1911A1(1), mockM16(1)],
      } };

    const action = { payload: mockM16(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM16(1).weight,
        firearms: [mockM1911A1(1), mockM16(2)],
      } };

    state = increaseFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
