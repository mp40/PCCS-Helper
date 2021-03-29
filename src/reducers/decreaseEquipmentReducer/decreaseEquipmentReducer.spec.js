import { decreaseEquipmentReducer } from './index';
import { MockState } from '../mockState';
import { correctFloatingPoint } from '../../utils';

const addedEquipment = (qty) => (
  { name: 'testEquipment',
    weight: 1.53,
    qty }
);

const otherAddedEquipment = {
  name: 'otherEquipment',
  weight: 2.47,
  qty: 1,
};

describe('decreaseEquipmentReducer function', () => {
  it('should decrease quantity of the equipment by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (addedEquipment(1).weight * 2),
        equipment: [addedEquipment(2)],
      } };

    const action = { payload: addedEquipment(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - action.payload.weight),
        equipment: [addedEquipment(1)],
      } };

    state = decreaseEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should decrease quantity of the correct equipment if more than one in list', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + (addedEquipment(2).weight * 2) + otherAddedEquipment.weight,
        equipment: [addedEquipment(2), otherAddedEquipment],
      } };

    const action = { payload: addedEquipment(2) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight - action.payload.weight),
        equipment: [addedEquipment(1), otherAddedEquipment],
      } };

    state = decreaseEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
