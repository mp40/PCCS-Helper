import { modifyFirearmReducer } from './index';
import { MockState } from '../mockState';

const mockM1911A1 = () => ({
  name: 'M1911A1',
  qty: 1,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
});

const mockM16 = () => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
  ],
});

describe('addFirearmReducer function', () => {
  let state = new MockState();

  it('should modify the weapon correctly with additional weight', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1().weight,
        firearms: [mockM1911A1()],
      } };

    const modNote = { note: 'test', weightMod: 1 };
    const m1911WithMod = mockM1911A1();
    m1911WithMod.modNotes = [modNote];
    m1911WithMod.weight += modNote.weightMod;

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + modNote.weightMod,
        firearms: [m1911WithMod],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    state = modifyFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should modify the weapon correctly with less weight', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1().weight,
        firearms: [mockM1911A1()],
      } };

    const modNote = { note: 'test', weightMod: -1 };
    const m1911WithMod = mockM1911A1();
    m1911WithMod.modNotes = [modNote];
    m1911WithMod.weight += modNote.weightMod;

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + modNote.weightMod,
        firearms: [m1911WithMod],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    state = modifyFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should modify the correct weapon', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1().weight + mockM16().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16(), mockM1911A1()],
      } };

    const modNote = { note: 'test', weightMod: 1 };
    const m1911WithMod = mockM1911A1();
    m1911WithMod.modNotes = [modNote];
    m1911WithMod.weight += modNote.weightMod;

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + modNote.weightMod,
        firearms: [mockM16(), m1911WithMod],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    state = modifyFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
