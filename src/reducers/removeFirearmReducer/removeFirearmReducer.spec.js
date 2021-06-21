import { removeFirearmReducer } from './index';
import { MockState } from '../mockState';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('removeFirearmReducer function', () => {
  let state = new MockState();

  it('should return correct values when a gun removed from list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16],
      } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911],
      } };

    const action = { payload: 'M16' };

    state = removeFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
