import { removeEquipmentReducer } from './index';
import { MockState } from '../mockState';
import { AddedEquipment, AddedEquipmentAgain, Equipment, OtherEquipment } from '../testResouces';

describe('removeEquipmentReducer function', () => {
  it('should return correct values when equipment removed from list', () => {
    const action = { payload: new Equipment() };
    const newState = removeEquipmentReducer(new AddedEquipment(), action);
    expect(newState).toMatchObject(new MockState());
  });
  it('should return correct values when equipment removed from list with more than one equipment type', () => {
    const action = { payload: new OtherEquipment() };
    const newState = removeEquipmentReducer(new AddedEquipmentAgain(), action);
    expect(newState).toMatchObject(new AddedEquipment());
  });
});
