import { addFirearmReducer } from './index';
import { MockState } from '../mockState';
import { AddedM1911A1, AddedM1911A1AndM16 } from '../testResouces';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';

describe('addFirearmReducer function', () => {
  it('should return correct values when firearm added to empty list', () => {
    const action = { payload: testM1911A1() };
    const newState = addFirearmReducer(new MockState(), action);
    expect(newState).toMatchObject(new AddedM1911A1());
  });
  it('should return correct values when additional firearm added', () => {
    const action = { payload: testM16() };
    const newState = addFirearmReducer(new AddedM1911A1(), action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
  });
});
