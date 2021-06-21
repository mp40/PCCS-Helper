import { decreaseLauncherAmmoReducer } from './index';
import { MockState } from '../mockState';

describe('decreaseLauncherAmmoReducer', () => {
  const mockM79 = (ammo = 0) => ({
    name: 'M79',
    weight: 6.5,
    qty: 1,
    mag: [{ class: 'HEAT', weight: 0.51, qty: ammo }, { class: 'HE', weight: 0.51, qty: 0 }],
  });

  const mockM72 = () => ({
    name: 'M72',
    weight: 5.2,
    qty: 2,
    mag: [{ weight: '-' }],
  });

  it('should decrease quantity of the ammo by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM72(), mockM79(1)],
      } };

    const action = { payload: { launcherToModify: 'M79', magazineIndex: 0 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM72(), mockM79()],
      } };

    state = decreaseLauncherAmmoReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
