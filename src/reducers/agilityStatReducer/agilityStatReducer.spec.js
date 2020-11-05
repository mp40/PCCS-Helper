import { modifyAgilityValueReducer } from './index';
import { MockState } from '../mockState';

describe('agilityStatlReducer function', () => {
  let state = new MockState();

  it('should return correct values when agility changes to 3', () => {
    const action = { payload: 3 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        agi: action.payload,
        baseSpeed: 3,
        maxSpeed: 3,
        ASF: 3,
        damageBonus: 0.5,
        gunCombatActions: 2,
        handCombatActions: 1,
      } };

    state = modifyAgilityValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when agility changes to 18', () => {
    const action = { payload: 18 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        agi: action.payload,
        baseSpeed: 3,
        maxSpeed: 8,
        ASF: 18,
        damageBonus: 3,
        gunCombatActions: 5,
        handCombatActions: 9,
      } };

    state = modifyAgilityValueReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
