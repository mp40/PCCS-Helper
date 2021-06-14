import { addGrenadeReducer } from './index';
import { MockState } from '../mockState';

describe('addGreandeReducer function', () => {
  let state = new MockState();

  it('should add grenade to list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [{ name: 'L2 A2', qty: 1 }],
      } };

    const action = { payload: 'TNT' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [{ name: 'L2 A2', qty: 1 }, { name: 'TNT', qty: 1 }],
      } };

    state = addGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
