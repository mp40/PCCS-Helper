import { decreaseMagazineReducer } from './index';
import { MockState } from '../mockState';

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

describe('decreaseMagazineReducer function', () => {
  it('should decrease quantity of the magazine by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911, mockM16WithSpareMag],
      } };

    const action = { payload: { firearmToModify: 'M16', magazineIndex: 1 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911, mockM16],
      } };

    state = decreaseMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
