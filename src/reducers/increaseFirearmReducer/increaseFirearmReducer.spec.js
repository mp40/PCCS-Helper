import { increaseFirearmReducer } from './index';
import { testM1911A1 } from '../../helpers/testHelpers';
import {
  AddedM1911A1,
  AddedM1911A1AndM16,
  AddedTwoM1911A1,
  AddedTwoM1911A1AndOneM16,
} from '../testResouces';

describe('increaseFirearmReducer function', () => {
  it('should increase quantity of the gun by one', () => {
    const action = { payload: testM1911A1() };
    const newState = increaseFirearmReducer(new AddedM1911A1(), action);
    expect(newState).toMatchObject(new AddedTwoM1911A1());
  });
  it('should increase quantity of the target gun in array with more than item', () => {
    const action = { payload: testM1911A1() };
    const newState = increaseFirearmReducer(new AddedM1911A1AndM16(), action);
    expect(newState).toMatchObject(new AddedTwoM1911A1AndOneM16());
  });
});
