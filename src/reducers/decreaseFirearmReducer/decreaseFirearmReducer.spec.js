import { decreaseFirearmReducer } from './index';
import { testM1911A1 } from '../../helpers/testHelpers';
import {
  AddedM1911A1,
  AddedM1911A1AndM16,
  AddedTwoM1911A1,
  AddedTwoM1911A1AndOneM16,
} from '../testResouces';

describe('addFirearmReducer function', () => {
  it('should increase quantity of the gun by one', () => {
    const action = { payload: testM1911A1() };
    const newState = decreaseFirearmReducer(new AddedTwoM1911A1(), action);
    expect(newState).toMatchObject(new AddedM1911A1());
  });
  it('should increase quantity of the target gun in array with more than item', () => {
    const action = { payload: testM1911A1() };
    const newState = decreaseFirearmReducer(new AddedTwoM1911A1AndOneM16(), action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
  });
});
