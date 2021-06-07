import { addFirearmReducer } from './index';
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

const mockSvd = {
  name: 'Dragunov SVD',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.68, cap: 10, qty: 0 }],
  attachedOptic: 'PSO - 1',
};

describe('addFirearmReducer function', () => {
  it('should return correct values when firearm added to empty list', () => {
    let state = new MockState();
    const action = { payload: 'M1911A1' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911],
      } };

    state = addFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when additional firearm added', () => {
    let state = new MockState();
    state.currentCharacter.firearms = [mockM1911];
    const action = { payload: 'M16' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [...state.currentCharacter.firearms, mockM16],
      } };

    state = addFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should retain optics that are attached', () => {
    let state = new MockState();
    state.currentCharacter.firearms = [mockM1911];
    const action = { payload: 'Dragunov SVD' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [...state.currentCharacter.firearms, mockSvd],
      } };

    state = addFirearmReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
