import { MockState } from '../mockState';
import { updateUnderslungLauncherReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m203 = {
  attached: 'M203',
  mag: [{ qty: 0 }, { qty: 0 }],
};

const m320 = {
  attached: 'M320',
  mag: [{ qty: 4 }],
};

const m16WithM203 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: m203,
};

const m16WithM320 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: m320,
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('updateUnderslungLauncherReducer', () => {
  let state;

  beforeEach(() => {
    state = new MockState();
  });

  it('should add firearm launcher if none attached', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16],
      } };

    const action = { payload: { firearmToUpdate: 'M16', launcher: 'M203' } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithM203],
      } };

    state = updateUnderslungLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].launcher).toEqual(m203);
  });

  it('should update firearm launcher if different launcher attached', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithM320],
      } };

    const action = { payload: { firearmToUpdate: 'M16', launcher: 'M203' } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithM203],
      } };

    state = updateUnderslungLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].launcher).toEqual(m203);
  });
});
