import { setPrimaryMagazineReducer } from './index';
import { testM16, testM1911A1 } from '../../helpers/testHelpers';
import { AddedM1911A1AndM16 } from '../testResouces';

describe('setPrimaryMagazineReducer function', () => {
  it('should set the primary magazine for the correct weapon', () => {
    const indexOfMagazine = 1;
    const action = { payload: { firearm: 'M16', magazine: indexOfMagazine } };
    const newState = setPrimaryMagazineReducer(new AddedM1911A1AndM16(), action);
    const weightWithPrimary = testM16().weight - testM16().mag[0].weight + testM16().mag[1].weight;
    expect(newState.gear.firearms[1].mag[0].cap).toBe(30);
    expect(newState.gear.firearms[1].weight).toBe(weightWithPrimary);
    expect(newState.totalWeight).toBe(5 + testM1911A1().weight + testM16().weight + 0.3);
  });
});
