import { addEquipmentReducer } from './index';
import { MockState } from '../mockState';

describe('addEquipmentReducer function', () => {
  let state = new MockState();

  it('should return correct values when equipment added to empty list', () => {
    const action = { payload: {
      name: 'testEquipment',
      weight: 1.53,
      qty: 1,
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        equipment: [...state.currentCharacter.equipment, action.payload],
      } };

    state = addEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should return correct values when additional equipment added', () => {
    const action = { payload: {
      name: 'otherEquipment',
      weight: 2.47,
      qty: 1,
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        equipment: [...state.currentCharacter.equipment, action.payload],
      } };

    state = addEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
