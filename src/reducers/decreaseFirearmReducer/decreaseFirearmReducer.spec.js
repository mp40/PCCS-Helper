import { MockState } from '../mockState';
import { decreaseFirearmReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m1911Qty2 = {
  name: 'M1911A1',
  qty: 2,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('decreaseFirearmReducer function', () => {
  it('should decrease quantity of the gun by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m16, m1911Qty2],
      } };

    const action = { payload: 'M1911A1' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m16, m1911],
      } };

    state = decreaseFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
