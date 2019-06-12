import { modifyHealthValueReducer } from './index';
import { MockState } from '../mockState';
import { HealthThree, HealthEighteen } from './testResources';

describe('healthStatReducer function', () => {
  it('should return correct values when health changes to 3', () => {
    const action = { payload: 3 };
    const newState = modifyHealthValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new HealthThree());
  });
  it('should return correct values when health changes to 18', () => {
    const action = { payload: 18 };
    const newState = modifyHealthValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new HealthEighteen());
  });
});
