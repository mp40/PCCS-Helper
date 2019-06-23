import { removeFirearmReducer } from './index';
import { MockState } from '../mockState';
import { AddedTwoM1911A1AndOneM16, AddedM16 } from '../testResouces';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';

describe('removeFirearmReducer function', () => {
  it('should return correct values when equipment removed from list', () => {
    const action = { payload: testM16() };
    const newState = removeFirearmReducer(new AddedM16(), action);
    expect(newState).toMatchObject(new MockState());
  });
  it('should return correct values when firearm removed from list with more than one type of gun', () => {
    const action = { payload: testM1911A1() };
    const newState = removeFirearmReducer(new AddedTwoM1911A1AndOneM16(), action);
    expect(newState).toMatchObject(new AddedM16());
  });
});
