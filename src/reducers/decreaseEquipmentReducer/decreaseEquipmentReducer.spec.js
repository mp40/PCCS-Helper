import { decreaseEquipmentReducer } from './index';
import { EquipmentQtyTwo, AddedEquipment, IncreasedEquipment } from '../testResouces';

describe('addEquipmentReducer function', () => {
  it('should increase quantity of the equipment by one', () => {
    const action = { payload: new EquipmentQtyTwo() };
    const newState = decreaseEquipmentReducer(new IncreasedEquipment(), action);
    expect(newState).toMatchObject(new AddedEquipment());
  });
});
