import { increaseLauncherAmmoReducer } from './index';
import { MockState } from '../mockState';

const mockM79 = (grenades = 0) => ({
  name: 'M79',
  weight: 6.5,
  qty: 1,
  mag: [{ class: 'HEAT', weight: 0.51, qty: 0 }, { class: 'HE', weight: 0.51, qty: grenades }],
});

const mockM72 = () => ({
  name: 'M72',
  weight: 5.2,
  qty: 1,
  mag: [{ weight: '-' }],
});

describe('increaseLauncherAmmoReducer', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      totalWeight: state.currentCharacter.totalWeight + mockM79().weight,
      baseSpeed: 2.5,
      maxSpeed: 5,
      gunCombatActions: 3,
      handCombatActions: 3,
      launchers: [mockM79(0)],
    } };

  it('should increase quantity of the ammo by one', () => {
    const action = { payload: { weapon: mockM79(), magazine: mockM79().mag[1] } };

    const mockState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM79().mag[1].weight,
        launchers: [mockM79(1)],
      } };

    state = increaseLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(mockState);
  });

  it('should increase quantity of the target ammo in array with more than one launcher', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM79().weight + mockM72().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        launchers: [mockM72(), mockM79(0)],
      } };

    const action = { payload: { weapon: mockM79(0), magazine: mockM79(0).mag[1] } };

    const mockState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockM79().mag[1].weight,
        launchers: [mockM72(), mockM79(1)],
      } };

    state = increaseLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(mockState);
  });
});
