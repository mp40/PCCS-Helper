import { removeAllEquipmentReducer } from './index';
import { MockState } from '../mockState';

describe('removeEquipmentReducer function', () => {
  let state = new MockState();

  const mockEquipment = {
    name: 'testEquipment',
    weight: 1.53,
    qty: 1,
  };

  const mockOtherEquipment = {
    name: 'otherEquipment',
    weight: 2.47,
    qty: 1,
  };

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      equipment: [mockEquipment, mockOtherEquipment],
    } };

  it('should return correct values when all equipment removed from list', () => {
    const action = { payload: [] };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        equipment: [],
      } };

    state = removeAllEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
