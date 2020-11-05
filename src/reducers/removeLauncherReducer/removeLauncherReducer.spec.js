import { removeLauncherReducer } from './index';
import { MockState } from '../mockState';

const mockM79 = (ammo = 0) => ({
  name: 'M79',
  weight: 6.5,
  qty: 1,
  mag: [{ class: 'HEAT', weight: 0.51, qty: ammo }, { class: 'HE', weight: 0.51, qty: 0 }],
});

const mockM72 = () => ({
  name: 'M72',
  weight: 5.2,
  qty: 1,
  mag: [{ weight: '-' }],
});

describe('removeLauncherReducer', () => {
  let state = new MockState();

  it('should return correct values when launcher removed from list', () => {
    const launcher = mockM79(2);
    const launcherWeight = launcher.weight + launcher.mag[0].weight * launcher.mag[0].qty;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + launcherWeight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [mockM79(2)],
      } };

    const action = { payload: mockM79(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5,
        baseSpeed: 3,
        maxSpeed: 6,
        gunCombatActions: 4,
        handCombatActions: 4,
        launchers: [],
      } };

    state = removeLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when launcher removed from list with more than one type of launcher', () => {
    const launcher = mockM79(2);
    const launcherWeight = launcher.weight + launcher.mag[0].weight * launcher.mag[0].qty;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + launcherWeight + mockM72().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [mockM79(2), mockM72()],
      } };

    const action = { payload: mockM79(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM72().weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        launchers: [mockM72()],
      } };

    state = removeLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
