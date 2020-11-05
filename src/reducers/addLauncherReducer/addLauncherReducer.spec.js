import { addLauncherReducer } from './index';
import { MockState } from '../mockState';

describe('addlauncherReducer function', () => {
  let state = new MockState();

  it('should return correct values when launcher added to empty list', () => {
    const action = { payload: {
      weight: 6.5,
      qty: 1,
      mag: [{ weight: 0.51, qty: 0 }, { weight: 0.51, qty: 0 }],
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [...state.currentCharacter.launchers, action.payload],
      } };

    state = addLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
  it('should return correct values when additional launcher added', () => {
    const action = { payload: {
      weight: 5.2,
      qty: 2,
      mag: [{ weight: '-' }],
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        baseSpeed: 2,
        maxSpeed: 4,
        launchers: [...state.currentCharacter.launchers, action.payload],
      } };

    state = addLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
