import { decreaseEquipmentReducer } from './index';
import { MockState } from '../mockState';

const targetEquipment = {
  name: 'targetEquipment',
  weight: 1.53,
  qty: 2,
};

const updatedEquipment = {
  name: 'targetEquipment',
  weight: 1.53,
  qty: 1,
};

const otherEquipment = {
  name: 'otherEquipment',
  weight: 2.47,
  qty: 2,
};

describe('decreaseEquipmentReducer function', () => {
  it('should decrease quantity of the target equipment by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        equipment: [otherEquipment, targetEquipment],
      } };

    const action = { payload: 'targetEquipment' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        equipment: [otherEquipment, updatedEquipment],
      } };

    state = decreaseEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
