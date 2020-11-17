import { MockState } from '../mockState';
import { decreaseLauncherReducer } from './index';
import { correctFloatingPoint } from '../reducerHelpers';

describe('decreaselauncherReducer', () => {
  const mockM79 = () => ({
    name: 'M79',
    weight: 6.5,
    qty: 1,
    mag: [{ class: 'HEAT', weight: 0.51, qty: 0 }, { class: 'HE', weight: 0.51, qty: 0 }],
  });

  const mockM72 = (qty = 1) => ({
    name: 'M72',
    weight: 5.2,
    qty,
    mag: [{ weight: '-' }],
  });

  it('should decrease quantity of the launcher by one', () => {
    let state = new MockState();

    const m72 = mockM72(2);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (m72.weight * 2),
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [m72],
      } };

    const action = { payload: m72 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - m72.weight),
        baseSpeed: 2.5,
        maxSpeed: 5,
        launchers: [mockM72(1)],
      } };

    state = decreaseLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should decrease quantity of the target launcher in array with more than item', () => {
    let state = new MockState();

    const m72 = mockM72(2);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (m72.weight * 2) + mockM79().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [m72, mockM79()],
      } };

    const action = { payload: m72 };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - m72.weight),
        launchers: [mockM72(1), mockM79()],
      } };

    state = decreaseLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
