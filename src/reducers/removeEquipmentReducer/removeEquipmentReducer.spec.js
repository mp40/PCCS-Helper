import { removeEquipmentReducer } from './index';
import { MockState } from '../mockState';

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

describe('removeEquipmentReducer function', () => {
  let state = new MockState();

  it('should return correct values when equipment removed from list', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockEquipment.weight,
        equipment: [mockEquipment],
      } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5,
        equipment: [],
      } };

    const action = { payload: mockEquipment };

    state = removeEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when equipment removed from list with more than one equipment type', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + mockEquipment.weight + mockOtherEquipment.weight,
        equipment: [mockEquipment, mockOtherEquipment],
      } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockEquipment.weight,
        equipment: [mockEquipment],
      } };

    const action = { payload: mockOtherEquipment };

    state = removeEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
