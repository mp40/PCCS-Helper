import { modifyGunCombatLevelReducer } from './index';
import { MockState } from '../mockState';
import { GunOne, GunTen } from './testResources';

describe('gunCombatLevelReducer function', () => {
  it('should return correct values when gunLevel changes to 1', () => {
    const action = { payload: 1 };
    const newState = modifyGunCombatLevelReducer(new MockState(), action);
    expect(newState).toMatchObject(new GunOne());
  });
  it('should return correct values when gunLevel changes to 10', () => {
    const action = { payload: 10 };
    const newState = modifyGunCombatLevelReducer(new MockState(), action);
    expect(newState).toMatchObject(new GunTen());
  });
});
