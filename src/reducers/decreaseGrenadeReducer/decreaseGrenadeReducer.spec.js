import { decreaseGrenadeReducer } from './index';
import { MockState } from '../mockState';

const lightGrenade = () => ({
  name: 'L2 A2',
  qty: 1,
  weight: 0.9,
});

const heavyGrenade = (qty) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

describe('decreaseGrenadeReducer function', () => {
  it('should decrease quantity of the grenade by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (heavyGrenade(2).weight * 2),
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        grenades: [heavyGrenade(2)],
      } };

    const action = { payload: heavyGrenade(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight - heavyGrenade(2).weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        grenades: [heavyGrenade(1)],
      } };

    state = decreaseGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target grenade in array with more than item', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (heavyGrenade(2).weight * 2) + lightGrenade().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        grenades: [lightGrenade(), heavyGrenade(2)],
      } };

    const action = { payload: heavyGrenade(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight - heavyGrenade(2).weight,
        grenades: [lightGrenade(), heavyGrenade(1)],
      } };

    state = decreaseGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
