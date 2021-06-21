import { MockState } from '../mockState';
import { removeMagazineReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m1911WithCustomMag = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }, { type: 'Mag', weight: 1, cap: 10, qty: 0, custom: true }],
};

const m16WithSpareMags = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 2 }],
};

const m16WithRemovedMag = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0, removed: true }],
};

describe('removeMagazineReducer', () => {
  it('should set standard magazine for selected firearm to 0 and mark as removed', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithSpareMags],
      } };

    const action = { payload: { firearmToUpdate: 'M16', magazineIndex: 1 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithRemovedMag],
      } };

    state = removeMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].mag[1].removed).toBe(true);
  });

  it('should delete custom magazines from the firearm', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911WithCustomMag, m16WithSpareMags],
      } };

    const action = { payload: { firearmToUpdate: 'M1911A1', magazineIndex: 1 } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithSpareMags],
      } };

    state = removeMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[0].mag.length).toBe(1);
  });
});
