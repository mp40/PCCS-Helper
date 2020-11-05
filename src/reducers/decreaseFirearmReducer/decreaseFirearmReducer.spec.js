import { MockState } from '../mockState';
import { decreaseFirearmReducer } from './index';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';

describe('decreaseFirearmReducer function', () => {
  it('should decrease quantity of the gun by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (testM1911A1().weight * 2),
        firearms: [testM1911A1(2)],
      } };

    const action = { payload: testM1911A1(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight - action.payload.weight,
        firearms: [testM1911A1(1)],
      } };

    state = decreaseFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should decrease quantity of the target gun in array with more than item', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (testM1911A1().weight * 2) + testM16().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [testM16(), testM1911A1(2)],
      } };

    const action = { payload: testM1911A1(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight - action.payload.weight,
        firearms: [testM16(), testM1911A1(1)],
      } };

    state = decreaseFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
