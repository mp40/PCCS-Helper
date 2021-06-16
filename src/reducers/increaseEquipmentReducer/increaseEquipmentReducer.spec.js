import { MockState } from '../mockState';
import { increaseEquipmentReducer } from './index';

const targetEquipment = {
  name: 'targetEquipment',
  weight: 1.53,
  qty: 1,
};

const updatedEquipment = {
  name: 'targetEquipment',
  weight: 1.53,
  qty: 2,
};

const otherEquipment = {
  name: 'otherEquipment',
  weight: 2.47,
  qty: 2,
};

describe('addEquipmentReducer function', () => {
  let state = new MockState();

  it('should increase quantity of the correct equipment by one', () => {
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

    state = increaseEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
