import { addFirearmReducer } from './index';
import { MockState } from '../mockState';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';

describe('addFirearmReducer function', () => {
  let state = new MockState();

  it('should return correct values when firearm added to empty list', () => {
    const action = { payload: testM1911A1() };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        firearms: [...state.currentCharacter.firearms, action.payload],
      } };

    state = addFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when additional firearm added', () => {
    const action = { payload: testM16() };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + action.payload.weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [...state.currentCharacter.firearms, action.payload],
      } };

    state = addFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
