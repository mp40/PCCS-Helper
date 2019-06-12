import { modifyWillpowerValueReducer } from './index';
import { MockState } from '../mockState';
import { WillpowerThree, WillpowerEighteen } from './testResources';

describe('willpowerStatReducer function', () => {
  it('should return correct values when willpower changes to 3', () => {
    const action = { payload: 3 };
    const newState = modifyWillpowerValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new WillpowerThree());
  });
  it('should return correct values when willpower changes to 18', () => {
    const action = { payload: 18 };
    const newState = modifyWillpowerValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new WillpowerEighteen());
  });
});
