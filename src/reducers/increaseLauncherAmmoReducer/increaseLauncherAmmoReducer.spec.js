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

  it('should increase quantity of the ammo by one', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM72(), mockM79(0)],
      } };

    const action = { payload: { launcherToModify: 'M79', magazineIndex: 1 } };

    const mockState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM72(), mockM79(1)],
      } };

    state = increaseLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(mockState);
  });
});
