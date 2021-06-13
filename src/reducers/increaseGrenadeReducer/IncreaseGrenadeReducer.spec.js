import { increaseGrenadeReducer } from './index';
import { MockState } from '../mockState';

const mockLightGrenade = (qty = 1) => ({
  name: 'L2 A2',
  qty,
  weight: 0.9,
});

const mockHeavyGrenade = (qty = 1) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

describe('increaseGrenadeReducer function', () => {
  let state = new MockState();

  it('should increase quantity of the grenade by one', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [mockHeavyGrenade(1), mockLightGrenade(1)],
      } };

    const action = { payload: 'L2 A2' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [mockHeavyGrenade(1), mockLightGrenade(2)],
      } };

    state = increaseGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
