import { increaseEquipmentReducer } from './index';
import { Equipment, AddedEquipment, IncreasedEquipment } from '../testResouces';
// import {  } from './testResources';

describe('addEquipmentReducer function', () => {
  it('should increase quantity of the equipment by one', () => {
    const action = { payload: new Equipment() };
    const newState = increaseEquipmentReducer(new AddedEquipment(), action);
    expect(newState).toMatchObject(new IncreasedEquipment());
  });
});
