import { decreaseMagazineReducer } from './index';
import { MockState } from '../mockState';
import { correctFloatingPoint } from '../../utils';

describe('decreaseMagazineReducer function', () => {
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

  it('should decrease quantity of the magazine by one', () => {
    let state = new MockState();

    const m1911A1 = mockM1911A1(2);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + m1911A1.weight + (m1911A1.mag[0].weight * 2),
        firearms: [m1911A1],
      } };

    const action = { payload: { weapon: m1911A1, magazine: m1911A1.mag[0] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - m1911A1.mag[0].weight),
        firearms: [mockM1911A1(1)],
      } };

    state = decreaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should decrease quantity of the target magazine in array with more than one firearm', () => {
    let state = new MockState();

    const m1911A1 = mockM1911A1(2);
    const m1911A1Weight = m1911A1.weight + (m1911A1.mag[0].weight * 2);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + m1911A1Weight + mockM203().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM203(), m1911A1],
      } };

    const action = { payload: { weapon: m1911A1, magazine: m1911A1.mag[0] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - m1911A1.mag[0].weight),
        firearms: [mockM203(), mockM1911A1(1)],
      } };

    state = decreaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should decrease the correct magazine', () => {
    let state = new MockState();

    const m16 = mockM16(1);
    const m16Weight = m16.weight + m16.mag[1].weight;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + m16Weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [m16],
      } };

    const action = { payload: { weapon: m16, magazine: m16.mag[1] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - m16.mag[1].weight),
        firearms: [mockM16()],
      } };

    state = decreaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should decrease ammo for attached grenade launcher correctly', () => {
    let state = new MockState();

    const m203 = mockM203(1);
    const m203Weight = m203.weight + m203.mag[2].weight;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + m203Weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [m203],
      } };

    const action = { payload: { weapon: m203, magazine: m203.mag[2] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - m203.mag[2].weight),
        firearms: [mockM203()],
      } };

    state = decreaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
