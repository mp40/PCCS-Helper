import { MockState } from '../mockState';
import { increaseLauncherReducer } from './index';
import { correctFloatingPoint } from '../../utils';

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

describe('increaseLauncherReducer', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      totalWeight: state.currentCharacter.totalWeight + mockM72(1).weight,
      baseSpeed: 2.5,
      maxSpeed: 5,
      gunCombatActions: 3,
      handCombatActions: 3,
      launchers: [mockM72(1)],
    } };

  it('should increase quantity of the launcher by one', () => {
    const action = { payload: mockM72(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight + mockM72().weight),
        baseSpeed: 2,
        maxSpeed: 4,
        launchers: [mockM72(2)],
      } };

    state = increaseLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target launcher in array with more than item', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM72(1).weight + mockM79().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [mockM79(), mockM72(1)],
      } };

    const action = { payload: mockM72(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight + mockM72().weight),
        baseSpeed: 2,
        maxSpeed: 4,
        launchers: [mockM79(), mockM72(2)],
      } };

    state = increaseLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
