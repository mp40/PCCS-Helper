import { increaseGrenadeReducer } from './index';
import { MockState } from '../mockState';

const mockLightGrenade = (qty = 1) => ({
  name: 'L2 A2',
  qty,
  weight: 0.9,
});

const mockHeavyGrenade = (qty = 1) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

describe('increaseGrenadeReducer function', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      totalWeight: state.currentCharacter.totalWeight + mockHeavyGrenade(1).weight,
      baseSpeed: 2.5,
      maxSpeed: 5,
      gunCombatActions: 3,
      handCombatActions: 3,
      grenades: [mockHeavyGrenade(1)],
    } };

  it('should increase quantity of the grenade by one', () => {
    const action = { payload: mockHeavyGrenade(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockHeavyGrenade(1).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        grenades: [mockHeavyGrenade(2)],
      } };

    state = increaseGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target grenade in array with more than item', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockHeavyGrenade(1).weight + mockLightGrenade(1).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        grenades: [mockHeavyGrenade(1), mockLightGrenade(1)],
      } };

    const action = { payload: mockLightGrenade(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockLightGrenade(1).weight,
        grenades: [mockHeavyGrenade(1), mockLightGrenade(2)],
      } };

    state = increaseGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
