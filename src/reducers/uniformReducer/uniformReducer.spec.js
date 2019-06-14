import { changeUniformReducer } from './index';
import { MockState } from '../mockState';
import { TropicalUniform, NormalUniformAndGear, WinterUniform } from './testResources';

describe('changeUniformReducer function', () => {
  it('should return correct values when change from Normal to Tropical unifrom', () => {
    const action = { payload: 'Tropical' };
    const newState = changeUniformReducer(new MockState(), action);
    expect(newState).toMatchObject(new TropicalUniform());
  });
  it('should return correct values when changing unifrom triggers combat action changes', () => {
    const action = { payload: 'Winter' };
    const newState = changeUniformReducer(new NormalUniformAndGear(), action);
    expect(newState).toMatchObject(new WinterUniform());
  });
});
