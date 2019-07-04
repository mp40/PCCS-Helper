import { setPrimaryMagazineReducer } from './index';
import { AddedM1911A1AndM16 } from '../testResouces';

describe('setPrimaryMagazineReducer function', () => {
  it('should set the primary magazine for the correct weapon', () => {
    const action = { payload: { firearm: 'M16', magazine: { cap: 30, weight: 1 } } };
    const newState = setPrimaryMagazineReducer(new AddedM1911A1AndM16(), action);
    expect(newState.gear.firearms[1].mag[0].cap).toBe(30);
  });
});
