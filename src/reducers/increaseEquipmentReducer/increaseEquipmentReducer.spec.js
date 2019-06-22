import { increaseEquipmentReducer } from './index';
import {
  Equipment,
  AddedEquipment,
  IncreasedEquipment,
  AddedEquipmentAgain,
  IncreasedFirstEquipmentItem,
} from '../testResouces';

describe('addEquipmentReducer function', () => {
  it('should increase quantity of the equipment by one', () => {
    const action = { payload: new Equipment() };
    const newState = increaseEquipmentReducer(new AddedEquipment(), action);
    expect(newState).toMatchObject(new IncreasedEquipment());
  });
  it('should increase quantity of the target equipment in array with more than item', () => {
    const action = { payload: new Equipment() };
    const newState = increaseEquipmentReducer(new AddedEquipmentAgain(), action);
    expect(newState).toMatchObject(new IncreasedFirstEquipmentItem());
  });
});
