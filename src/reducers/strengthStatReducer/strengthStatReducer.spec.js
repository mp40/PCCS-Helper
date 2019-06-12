import { modifyStrengthValueReducer } from './index';
import { MockState } from '../mockState';
import { StrengthThree, StrengthEighteen } from './testResources';

describe('strengthStatReducer function', () => {
  it('should return correct values when strength changes to 3', () => {
    const action = { payload: 3 };
    const newState = modifyStrengthValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new StrengthThree());
  });
  it('should return correct values when strength changes to 18', () => {
    const action = { payload: 18 };
    const newState = modifyStrengthValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new StrengthEighteen());
  });
});
