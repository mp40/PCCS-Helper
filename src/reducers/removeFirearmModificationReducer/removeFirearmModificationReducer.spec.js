import { MockState } from '../mockState';
import { removeFirearmModificationReducer } from './index';

const modNote1 = { note: 'test1', weightMod: 1 };
const modNote2 = { note: 'test2', weightMod: 2 };
const modNote3 = { note: 'test3', weightMod: 3 };

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

const m1911WithThreeMods = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
  modNotes: [modNote1, modNote2, modNote3],
};

const m1911WithTwoMods = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
  modNotes: [modNote1, modNote3],
};

describe('removeFirearmModificationReducer function', () => {
  let state = new MockState();

  it('should remove correct modification from the weapon', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911WithThreeMods, m16],
      } };

    const action = { payload: { firearmToUpdate: 'M1911A1', modIndex: 1 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911WithTwoMods, m16],
      } };

    state = removeFirearmModificationReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
