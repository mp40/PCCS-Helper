import { MockState } from '../mockState';
import { removeOpticReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m16WithScope = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  attachedOptic: 'Low Power Scope',
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('removeOpticReducer', () => {
  let state = new MockState();

  it('should remove firearm optic', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithScope],
      } };

    const action = { payload: 'M16' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16],
      } };

    state = removeOpticReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].attachedOptic).toBe(undefined);
  });
});
