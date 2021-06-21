import { MockState } from '../mockState';
import { increaseFirearmReducer } from './index';

const mockM1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const mockM1911Qty2 = {
  name: 'M1911A1',
  qty: 2,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const mockM16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('increaseFirearmReducer function', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      firearms: [mockM16, mockM1911],
    } };

  it('should increase quantity of the gun by one', () => {
    const action = { payload: 'M1911A1' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM16, mockM1911Qty2],
      } };

    state = increaseFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
