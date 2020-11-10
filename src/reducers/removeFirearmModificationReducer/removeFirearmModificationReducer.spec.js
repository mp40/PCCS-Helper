import { MockState } from '../mockState';
import { removeFirearmModificationReducer } from './index';

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

const mockModdedM1911A1 = (mod) => {
  const gun = mockM1911A1();
  gun.modNotes = [mod];
  gun.weight += mod.weightMod;

  return gun;
};

describe('removeFirearmModificationReducer function', () => {
  let state = new MockState();

  it('should remove modification from the weapon', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const moddedM1911A1 = mockModdedM1911A1(modNote);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + moddedM1911A1,
        firearms: [moddedM1911A1],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1().weight,
        firearms: [mockM1911A1()],
      } };

    state = removeFirearmModificationReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should remove modifcations that reduce weight correctly', () => {
    const modNote = { note: 'test', weightMod: -0.5 };
    const moddedM1911A1 = mockModdedM1911A1(modNote);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + moddedM1911A1,
        firearms: [moddedM1911A1],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1().weight,
        firearms: [mockM1911A1()],
      } };

    state = removeFirearmModificationReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should remove the modification from the correct weapon', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const moddedM1911A1 = mockModdedM1911A1(modNote);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + moddedM1911A1,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16(), moddedM1911A1],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1().weight + mockM16().weight,
        firearms: [mockM16(), mockM1911A1()],
      } };

    state = removeFirearmModificationReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should remove the correct modification if more than one modifcation', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const otherMod = { note: 'other', weightMod: 0.5 };
    const moddedM1911A1 = mockModdedM1911A1(modNote);
    moddedM1911A1.modNotes.push(otherMod);
    moddedM1911A1.weight += 0.5;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + moddedM1911A1,
        baseSpeed: 3,
        maxSpeed: 6,
        gunCombatActions: 4,
        handCombatActions: 4,
        firearms: [moddedM1911A1],
      } };

    const action = { payload: { firearm: 'M1911A1', modNote } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockModdedM1911A1(otherMod).weight,
        firearms: [mockModdedM1911A1(otherMod)],
      } };

    state = removeFirearmModificationReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
