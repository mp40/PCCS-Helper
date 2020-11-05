import { addGrenadeReducer } from './index';
import { MockState } from '../mockState';

describe('addGreandeReducer function', () => {
  let state = new MockState();

  it('should return correct values when grenade added to empty list', () => {
    const action = { payload: {
      name: 'TNT',
      qty: 1,
      weight: 10,
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        grenades: [...state.currentCharacter.grenades, action.payload],
      } };

    state = addGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when additional grenade added', () => {
    const action = { payload: {
      name: 'L2 A2',
      qty: 1,
      weight: 0.9,
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        baseSpeed: 2,
        maxSpeed: 4,
        grenades: [...state.currentCharacter.grenades, action.payload],
      } };

    state = addGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
