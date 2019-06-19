import { addEquipmentReducer } from './index';
import { MockState } from '../mockState';
import { AddedEquipment, AddedEquipmentAgain, Equipment, OtherEquipment } from '../testResouces';

describe('addEquipmentReducer function', () => {
  it('should return correct values when equipment added to empty list', () => {
    const action = { payload: new Equipment() };
    const newState = addEquipmentReducer(new MockState(), action);
    expect(newState).toMatchObject(new AddedEquipment());
  });
  it('should return correct values when additional equipment added', () => {
    const action = { payload: new OtherEquipment() };
    const newState = addEquipmentReducer(new AddedEquipment(), action);
    expect(newState).toMatchObject(new AddedEquipmentAgain());
  });
});
