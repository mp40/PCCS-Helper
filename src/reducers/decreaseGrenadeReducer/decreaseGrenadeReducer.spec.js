import { decreaseGrenadeReducer } from './index';
import { MockState } from '../mockState';

const lightGrenade = () => ({
  name: 'L2 A2',
  qty: 1,
  weight: 0.9,
});

const heavyGrenade = (qty) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

describe('decreaseGrenadeReducer function', () => {
  it('should decrease quantity of the grenade by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [heavyGrenade(2), lightGrenade()],
      } };

    const action = { payload: 'TNT' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [heavyGrenade(1), lightGrenade()],
      } };

    state = decreaseGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
