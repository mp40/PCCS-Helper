import { MockState } from '../mockState';
import { removeAllFirearmModificationsReducer, removeModificationWeight } from './index';
import { correctFloatingPoint } from '../../utils';

const mockM1911A1 = () => ({
  name: 'M1911A1',
  qty: 1,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
});

const mockM16 = (mag1, mag2) => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: mag1 },
    { type: 'Mag', weight: 1, cap: 30, qty: mag2 },
  ],
});

const moddedM16 = (mag1, mag2) => {
  const m16 = mockM16(mag1, mag2);
  m16.weight += 1;
  m16.modNotes = [{ note: 'test', weightMod: 1 }];
  m16.mag = [...m16.mag, { type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true }];

  return m16;
};

describe('removeAllFirearmModificationsReducer', () => {
  let state = new MockState();

  it('should return clean copy of the correct firearm', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM1911A1().weight + moddedM16(0, 0).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM1911A1(), moddedM16(0, 0)],
      } };

    const action = { payload: 'M16' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM1911A1().weight + mockM16(0, 0).weight,
        firearms: [mockM1911A1(), mockM16(0, 0)],
      } };

    state = removeAllFirearmModificationsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should retain the same firearm and standard magazine qty values', () => {
    const m16 = moddedM16(2, 1);
    m16.mag[2].qty = 1;

    const ammoWeight = (m16.mag[0].qty * m16.mag[0].weight)
    + (m16.mag[1].qty * m16.mag[1].weight)
    + (m16.mag[2].qty * m16.mag[2].weight);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + m16.weight + ammoWeight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [m16],
      } };

    const action = { payload: 'M16' };

    const pureM16 = mockM16(2, 1);
    const pureAmmoWeight = (m16.mag[0].qty * m16.mag[0].weight)
    + (m16.mag[1].qty * m16.mag[1].weight);

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(5 + pureM16.weight + pureAmmoWeight),
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [pureM16],
      } };

    state = removeAllFirearmModificationsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should remove weight of custom magazine if it was set as primary', () => {
    const m16 = moddedM16(0, 0);
    m16.mag.unshift({ type: 'test', weight: 1, cap: 10, qty: 1, custom: true });
    m16.weight += 0.3;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + m16.weight + m16.mag[0].weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [m16],
      } };

    const action = { payload: 'M16' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM16().weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        firearms: [mockM16(0, 0)],
      } };

    state = removeAllFirearmModificationsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});

describe('removeModificationWeight helper function', () => {
  it('should return gun weight if moddifications are undefined or null', () => {
    expect(removeModificationWeight(5, undefined)).toBe(5);
    expect(removeModificationWeight(5, null)).toBe(5);
  });

  it('should remove the weightMod value from the gun weight', () => {
    const modNotes = [{ note: 'test', weightMod: 1 }];
    expect(removeModificationWeight(5, modNotes)).toBe(4);
  });
});
