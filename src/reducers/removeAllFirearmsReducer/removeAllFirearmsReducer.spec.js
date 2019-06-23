import { removeAllFirearmsReducer } from './index';
import { MockState } from '../mockState';
import { AddedTwoM1911A1AndOneM16 } from '../testResouces';

describe('removeEquipmentReducer function', () => {
  it('should return correct values when al  equipment removed from list', () => {
    const action = { payload: [] };
    const newState = removeAllFirearmsReducer(new AddedTwoM1911A1AndOneM16(), action);
    expect(newState).toMatchObject(new MockState());
  });
});
