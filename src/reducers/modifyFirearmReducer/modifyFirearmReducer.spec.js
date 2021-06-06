import { modifyFirearmReducer } from './index';
import { MockState } from '../mockState';

const modNote = { note: 'test', weightMod: 1 };

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

const m1911WithMod = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
  modNotes: [modNote],
};

describe('addFirearmReducer function', () => {
  it('should add modification the weapon', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16],
      } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911WithMod, m16],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    state = modifyFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[0].modNotes).toEqual([modNote]);
  });
});
