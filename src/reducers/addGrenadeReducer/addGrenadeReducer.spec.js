import { addGrenadeReducer } from './index';
import { MockState } from '../mockState';

const lightGrenade = {
  name: 'L2 A2',
  qty: 1,
  weight: 0.9,
};

const heavyGrenade = {
  name: 'TNT',
  qty: 1,
  weight: 10,
};

describe('addGreandeReducer function', () => {
  let state = new MockState();

  it('should add grenade to list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [lightGrenade],
      } };

    const action = { payload: heavyGrenade };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [lightGrenade, heavyGrenade],
      } };

    state = addGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
