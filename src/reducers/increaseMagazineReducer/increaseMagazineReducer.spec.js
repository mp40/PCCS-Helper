import { MockState } from '../mockState';
import { increaseMagazineReducer } from './index';
import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { correctFloatingPoint } from '../../utils';

const mockM1911A1 = (ammo = 0) => ({
  name: 'M1911A1',
  qty: 1,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: ammo }],
});

const mockM16 = (ammo = 0) => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Mag', weight: 1, cap: 30, qty: ammo },
  ],
});

const mockM203 = (grenades = 0) => ({
  name: 'M203',
  qty: 1,
  weight: 11.6,
  mag: [
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: grenades },
    { type: 'Rnd', class: 'HE', weight: 0.51, cap: 1, qty: 0 },
  ],
});

describe('increaseMagazineReducer function', () => {
  let state = new MockState();

  it('should increase quantity of the magazine by one', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1(0).weight,
        firearms: [mockM1911A1(0)],
      } };

    const action = { payload: { weapon: mockM1911A1(), magazine: mockM1911A1().mag[0] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1(0).mag[0].weight,
        firearms: [mockM1911A1(1)],
      } };

    state = increaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target magazine in array with more than one firearm', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1(0).weight + mockM16(0).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM1911A1(0), mockM16(0)],
      } };

    const action = { payload: { weapon: mockM1911A1(), magazine: mockM1911A1().mag[0] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1(0).mag[0].weight,
        firearms: [mockM1911A1(1), mockM16()],
      } };

    state = increaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase the correct magazine', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM16(0).weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16(0)],
      } };

    const weapon = mockM16();
    const magazine = weapon.mag[1];
    const action = { payload: { weapon, magazine } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM16(0).mag[1].weight,
        firearms: [mockM16(1)],
      } };

    state = increaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase ammo for attached grenade launcher correctly', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM203(0).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM203(0)],
      } };

    const weapon = mockM203();
    const magazine = weapon.mag[2];
    const action = { payload: { weapon, magazine } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight + mockM203(0).mag[2].weight),
        firearms: [mockM203(1)],
      } };

    state = increaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});

describe('modifing contents of an array', () => {
  it('should update magazine quantity in magazine array', () => {
    expect(modifyObjectQtyInArray(
      mockM1911A1().mag, mockM1911A1().mag[0], 1)).toEqual(mockM1911A1(1).mag);
  });

  it('should update the firearm in the array', () => {
    const magArray = modifyObjectQtyInArray(mockM1911A1().mag, mockM1911A1().mag[0], 1);
    const updatedGun = mockM1911A1(1);
    updatedGun.mag = magArray;

    expect(modifyObjectQtyInArray([mockM1911A1()], updatedGun)[0].mag[0]).toEqual(mockM1911A1(1).mag[0]);
  });
});
