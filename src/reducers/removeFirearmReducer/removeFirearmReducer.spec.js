import { removeFirearmReducer } from './index';
import { MockState } from '../mockState';
import { AddedTwoM1911A1AndOneM16, AddedM16 } from '../testResouces';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';

describe('removeFirearmReducer function', () => {
  const characterWithM16 = new AddedM16();
  characterWithM16.currentView = 'crateChar';
  const characterwithTwoM1911A1andOneM16 = new AddedTwoM1911A1AndOneM16();
  characterwithTwoM1911A1andOneM16.currentView = 'createChar';
  it('should return correct values when a gun removed from list', () => {
    const action = { payload: testM16() };
    const newState = removeFirearmReducer(characterWithM16, action);
    expect(newState.gear).toMatchObject(new MockState().gear);
  });
  it('should return correct values when firearm removed from list with more than one type of gun', () => {
    const action = { payload: testM1911A1() };
    const newState = removeFirearmReducer(characterwithTwoM1911A1andOneM16, action);
    expect(newState).toMatchObject(new AddedM16());
  });
});
