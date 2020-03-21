import { decreaseLauncherReducer } from './index';
import { MockState } from '../mockState';

import { testM79, testM72 } from '../../helpers/testHelpers';

const characterWithM72 = () => {
  const m72 = testM72();
  const character = new MockState();
  character.totalWeight += (m72.weight * 2);
  character.gear.launchers = [m72];
  return character;
};

const characterWithTwoM72 = () => {
  const m72 = testM72(2);
  const character = new MockState();
  character.totalWeight += (m72.weight * 2);
  character.gear.launchers = [m72];
  character.combatStats.baseSpeed = 2;
  character.combatStats.maxSpeed = 4;
  character.combatStats.combatActions = [3, 3];
  return character;
};

const characterWithM79AndM72 = () => {
  const m72 = testM72();
  const m79 = testM79();
  const character = new MockState();
  character.gear.launchers = [m72, m79];
  return character;
};

const characterWithMulipleLaunchers = () => {
  const m72 = testM72(2);
  const m79 = testM79();
  const character = new MockState();
  character.totalWeight += (m72.weight * 2) + m79.weight;
  character.gear.launchers = [m72, m79];
  character.combatStats.baseSpeed = 2;
  character.combatStats.maxSpeed = 4;
  character.combatStats.combatActions = [3, 3];
  return character;
};

describe('addlauncherReducer function', () => {
  it('should decrease quantity of the launcher by one', () => {
    const action = { payload: testM72() };
    const newState = decreaseLauncherReducer(characterWithTwoM72(), action);
    expect(newState).toMatchObject(characterWithM72());
  });
  it('should decrease quantity of the target launcher in array with more than item', () => {
    const action = { payload: testM79() };
    const newState = decreaseLauncherReducer(characterWithMulipleLaunchers(), action);
    expect(newState).toMatchObject(characterWithM79AndM72());
  });
});
