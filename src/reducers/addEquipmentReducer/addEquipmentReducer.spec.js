import { addEquipmentReducer } from './index';
import { MockState } from '../mockState';
import { AddedEquipment, testEquipment } from './testResources';


describe('addEquipmentReducer function', () => {
  it('should return correct values when equipment added', () => {
    const action = { payload: testEquipment() };
    const newState = addEquipmentReducer(new MockState(), action);
    expect(newState).toMatchObject(new AddedEquipment());
  });
});
