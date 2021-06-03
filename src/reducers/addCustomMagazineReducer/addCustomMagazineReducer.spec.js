import { addCustomMagazineReducer } from './index';
import { MockState } from '../mockState';

const customMagazine = { type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true };

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m1911WithCustomMag = {
  ...m1911, mag: [...m1911.mag, { ...customMagazine }],
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('addCustomMagazineReducer function', () => {
  let state = new MockState();

  it('should add custom Magazine to firearm', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m16, m1911],
      } };

    const action = { payload: { firearmToUpdate: 'M1911A1', magazine: customMagazine } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m16, m1911WithCustomMag],
      } };

    state = addCustomMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
