import { modifyMeleeCombatLevelReducer } from './index';
import { MockState } from '../mockState';
import { MeleeTwo, MeleeEleven } from './testResources';

describe('meleeCombatLevelReducer function', () => {
  it('should return correct values when gunLevel changes to 1', () => {
    const action = { payload: 2 };
    const newState = modifyMeleeCombatLevelReducer(new MockState(), action);
    expect(newState).toMatchObject(new MeleeTwo());
  });
  it('should return correct values when gunLevel changes to 10', () => {
    const action = { payload: 11 };
    const newState = modifyMeleeCombatLevelReducer(new MockState(), action);
    expect(newState).toMatchObject(new MeleeEleven());
  });
});
