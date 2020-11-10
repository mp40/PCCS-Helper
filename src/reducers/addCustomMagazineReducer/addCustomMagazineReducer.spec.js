import { addCustomMagazineReducer } from './index';
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

describe('addCustomMagazineReducer function', () => {
  let state = new MockState();

  const customMagazine = { type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true };
  const m1911WithMag = mockM1911A1();
  m1911WithMag.mag = [...m1911WithMag.mag, customMagazine];

  it('should add custom Magazine to firearm', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1().weight,
        firearms: [mockM1911A1()],
      } };

    const action = { payload: { firearm: 'M1911A1', magazine: customMagazine } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + customMagazine.weight,
        firearms: [m1911WithMag],
      } };

    state = addCustomMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should add the magazine to the correct firearm', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1().weight + mockM16().weight,
        firearms: [mockM1911A1(), mockM16()],
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
      } };

    const action = { payload: { firearm: 'M1911A1', magazine: customMagazine } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + customMagazine.weight,
        firearms: [m1911WithMag, mockM16()],
      } };

    state = addCustomMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
