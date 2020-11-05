import { decreaseLauncherAmmoReducer } from './index';
import { MockState } from '../mockState';

describe('decreaseLauncherAmmoReducer', () => {
  const mockM79 = (ammo = 0) => ({
    weight: 6.5,
    qty: 1,
    mag: [{ class: 'HEAT', weight: 0.51, qty: ammo }, { class: 'HE', weight: 0.51, qty: 0 }],
  });

  const mockM72 = () => ({
    weight: 5.2,
    qty: 2,
    mag: [{ weight: '-' }],
  });

  it('should decrease quantity of the ammo by one', () => {
    let state = new MockState();

    const m79 = mockM79(1);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + m79.weight + (m79.mag[0].qty * m79.mag[0].weight),
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [m79],
      } };

    const action = { payload: { weapon: m79, magazine: m79.mag[0] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight - m79.mag[0].weight,
        launchers: [mockM79()],
      } };

    state = decreaseLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target ammo in array with more than one launcher', () => {
    let state = new MockState();

    const m79 = mockM79(1);

    const initialWeight = state.currentCharacter.totalWeight
    + m79.weight
    + (m79.mag[0].qty * m79.mag[0].weight)
    + mockM72().weight;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: initialWeight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [mockM72(), m79],
      } };

    const action = { payload: { weapon: m79, magazine: m79.mag[0] } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight - m79.mag[0].weight,
        launchers: [mockM72(), mockM79()],
      } };

    state = decreaseLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
