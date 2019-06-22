import { decreaseEquipmentReducer } from './index';
import {
  EquipmentQtyTwo,
  AddedEquipment,
  IncreasedEquipment,
  IncreasedFirstEquipmentItem,
  AddedEquipmentAgain,
} from '../testResouces';

describe('decreaseEquipmentReducer function', () => {
  it('should decrease quantity of the equipment by one', () => {
    const action = { payload: new EquipmentQtyTwo() };
    const newState = decreaseEquipmentReducer(new IncreasedEquipment(), action);
    expect(newState).toMatchObject(new AddedEquipment());
  });
  it('should decrease quantity of the correct equipment if more than one in list', () => {
    const action = { payload: new EquipmentQtyTwo() };
    const newState = decreaseEquipmentReducer(new IncreasedFirstEquipmentItem(), action);
    expect(newState).toMatchObject(new AddedEquipmentAgain());
  });
});
