import { MockState } from '../mockState';
import { updateOpticReducer } from './index';

const m1911 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
};

const m16WithScope = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  attachedOptic: 'Low Power Scope',
};

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

describe('updateOpticReducer', () => {
  let state = new MockState();

  it('should update firearm optic', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16],
      } };

    const action = { payload: { firearmToUpdate: 'M16', optic: 'Low Power Scope' } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m1911, m16WithScope],
      } };

    state = updateOpticReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].attachedOptic).toBe('Low Power Scope');
  });
});
