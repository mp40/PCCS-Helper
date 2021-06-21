import { MockState } from '../mockState';
import { increaseMagazineReducer } from './index';

const mockM1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const mockM16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

const mockM16WithSpareMag = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 1 }],
};

describe('increaseMagazineReducer function', () => {
  let state = new MockState();

  it('should increase quantity of the magazine by one', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911, mockM16],
      } };

    const action = { payload: { firearmToModify: 'M16', magazineIndex: 1 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911, mockM16WithSpareMag],
      } };

    state = increaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
