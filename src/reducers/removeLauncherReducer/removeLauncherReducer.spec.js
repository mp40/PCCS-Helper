import { removeLauncherReducer } from './index';
import { MockState } from '../mockState';
import { testM79, testM72 } from '../../helpers/testHelpers';


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

const characterWithMulipleLaunchers = () => {
  const m72 = testM72(2);
  const m79 = testM79();
  const character = new MockState();
  character.totalWeight += (m72.weight * 2) + m79.weight;
  character.gear.launchers = [m72, m79];
  return character;
};


describe('removeLauncherReducer', () => {
  it('should return correct values when launcher removed from list', () => {
    const action = { payload: testM72(2) };
    const newState = removeLauncherReducer(characterWithTwoM72(), action);
    expect(newState.gear).toMatchObject(new MockState().gear);
  });
  it('should return correct values when launcher removed from list with more than one type of launcher', () => {
    const action = { payload: testM79() };
    const newState = removeLauncherReducer(characterWithMulipleLaunchers(), action);
    expect(newState).toMatchObject(characterWithTwoM72());
  });
});
