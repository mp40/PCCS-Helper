import { modifyAgilityValueReducer } from './index';
import { MockState } from '../mockState';
import { AgilityThree, AgilityEighteen } from './testResources';

describe('agilityStatlReducer function', () => {
  it('should return correct values when agility changes to 3', () => {
    const action = { payload: 3 };
    const newState = modifyAgilityValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new AgilityThree());
  });
  it('should return correct values when agility changes to 18', () => {
    const action = { payload: 18 };
    const newState = modifyAgilityValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new AgilityEighteen());
  });
});
