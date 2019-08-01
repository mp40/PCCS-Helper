import { removeAllEquipmentReducer } from './index';
import { MockState } from '../mockState';
import { AddedEquipmentAgain } from '../testResouces';

describe('removeEquipmentReducer function', () => {
  it('should return correct values when all equipment removed from list', () => {
    const action = { payload: [] };
    const newState = removeAllEquipmentReducer(new AddedEquipmentAgain(), action);
    expect(newState).toMatchObject(new MockState());
  });
});
