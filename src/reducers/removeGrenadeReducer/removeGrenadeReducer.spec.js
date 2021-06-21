import { removeGrenadeReducer } from './index';
import { MockState } from '../mockState';

const mockLightGrenade = (qty = 0) => ({
  name: 'L2 A2',
  qty,
  weight: 0.9,
});

const mockHeavyGrenade = (qty = 0) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

describe('removeGrenadeReducer function', () => {
  let state = new MockState();

  it('should return correct values when grenade removed from list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [mockLightGrenade(2), mockHeavyGrenade(2)],
      } };

    const action = { payload: 'L2 A2' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        grenades: [mockHeavyGrenade(2)],
      } };

    state = removeGrenadeReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
