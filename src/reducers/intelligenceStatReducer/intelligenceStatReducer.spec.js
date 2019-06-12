import { modifyIntelligenceValueReducer } from './index';
import { MockState } from '../mockState';
import { IntelligenceThree, IntelligenceEighteen } from './testResources';

describe('intelligenceStatReducer function', () => {
  it('should return correct values when intelligence changes to 3', () => {
    const action = { payload: 3 };
    const newState = modifyIntelligenceValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new IntelligenceThree());
  });
  it('should return correct values when intelligence changes to 18', () => {
    const action = { payload: 18 };
    const newState = modifyIntelligenceValueReducer(new MockState(), action);
    expect(newState).toMatchObject(new IntelligenceEighteen());
  });
});
