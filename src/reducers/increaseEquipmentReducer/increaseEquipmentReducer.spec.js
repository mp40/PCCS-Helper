import { MockState } from '../mockState';
import { increaseEquipmentReducer } from './index';
import { correctFloatingPoint } from '../../utils';

const addedEquipment = (qty = 1) => ({
  name: 'testEquipment',
  weight: 1.53,
  qty,
});

const otherAddedEquipment = (qty = 1) => ({
  name: 'otherEquipment',
  weight: 2.47,
  qty,
});

describe('addEquipmentReducer function', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      totalWeight: state.currentCharacter.totalWeight + addedEquipment(1).weight,
      equipment: [addedEquipment(1)],
    } };

  it('should increase quantity of the equipment by one', () => {
    const action = { payload: addedEquipment(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + addedEquipment(1).weight,
        equipment: [addedEquipment(2)],
      } };

    state = increaseEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should increase quantity of the target equipment in array with more than item', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: state.currentCharacter.totalWeight + otherAddedEquipment(1).weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        equipment: [...state.currentCharacter.equipment, otherAddedEquipment(1)],
      } };

    const action = { payload: otherAddedEquipment(1) };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(state.currentCharacter.totalWeight + otherAddedEquipment(1).weight),
        equipment: [addedEquipment(2), otherAddedEquipment(2)],
      } };

    state = increaseEquipmentReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
