import { MockState } from '../mockState';
import { removeUnderslungLauncherReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m16WithLauncher = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: {
    attached: 'M203',
    mag: [{ qty: 0 }, { qty: 0 }],
  },
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('removeUnderslungLauncherReducer', () => {
  let state = new MockState();

  it('should remove firearm underslung launcher', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithLauncher],
      } };

    const action = { payload: 'M16' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16],
      } };

    state = removeUnderslungLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].launcher).toBe(undefined);
  });
});
