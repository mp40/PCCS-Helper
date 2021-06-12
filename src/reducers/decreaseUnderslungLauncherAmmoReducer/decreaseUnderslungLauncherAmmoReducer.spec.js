import { MockState } from '../mockState';
import { decreaseUnderslungLauncherAmmoReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m203 = {
  attached: 'M203',
  mag: [{ qty: 0 }, { qty: 0 }],
};

const m203WithAmmo = {
  attached: 'M203',
  mag: [{ qty: 0 }, { qty: 1 }],
};

const m16WithM203 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: m203,
};

const m16WithM203AndAmmo = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: m203WithAmmo,
};

describe('increaseUnderslungLauncherAmmoReducer function', () => {
  let state = new MockState();

  it('should increase quantity of the magazine by one', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithM203AndAmmo],
      } };

    const action = { payload: { firearmToModify: 'M16', magazineIndex: 1 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithM203],
      } };

    state = decreaseUnderslungLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].launcher).toMatchObject(m203);
  });
});
