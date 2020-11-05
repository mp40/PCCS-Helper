import { removeGrenadeReducer } from './index';
import { MockState } from '../mockState';

const mockLightGrenade = (qty = 0) => ({
  name: 'L2 A2',
  qty,
  weight: 0.9,
});

const mockHeavyGrenade = (qty = 0) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

describe('removeGrenadeReducer function', () => {
  let state = new MockState();

  it('should return correct values when grenade removed from list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (mockLightGrenade().weight * 2),
        grenades: [mockLightGrenade(2)],
      } };

    const action = { payload: mockLightGrenade(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5,
        grenades: [],
      } };

    state = removeGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when grenade removed from list with more than one grenade type', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockLightGrenade(1).weight + mockHeavyGrenade(1).weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        grenades: [mockLightGrenade(1), mockHeavyGrenade(1)],
      } };

    const action = { payload: mockHeavyGrenade(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockLightGrenade(1).weight,
        baseSpeed: 3,
        maxSpeed: 6,
        gunCombatActions: 4,
        handCombatActions: 4,
        grenades: [mockLightGrenade(1)],
      } };

    state = removeGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
