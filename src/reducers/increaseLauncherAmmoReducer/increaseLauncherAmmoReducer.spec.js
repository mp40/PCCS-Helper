import { increaseLauncherAmmoReducer } from './index';
import { testM79, testM72 } from '../../helpers/testHelpers';
import { MockState } from '../mockState';

const characterWithM79NoSpareAmmo = () => {
  const m79 = testM79();
  const character = new MockState();
  character.totalWeight += m79.weight;
  character.gear.launchers = [m79];
  return character;
};

const characterWithM79AndSpareRound = () => {
  const m79 = testM79(1);
  const character = new MockState();
  character.totalWeight += m79.weight + m79.mag[0].weight;
  character.gear.launchers = [m79];
  character.combatStats.baseSpeed = 2.5;
  character.combatStats.maxSpeed = 5;
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

describe('increaseLauncherAmmoReducer', () => {
  it('should increase quantity of the ammo by one', () => {
    const action = { payload: { weapon: testM79(), magazine: testM79().mag[0] } };
    const newState = increaseLauncherAmmoReducer(characterWithM79NoSpareAmmo(), action);
    expect(newState).toMatchObject(characterWithM79AndSpareRound());
  });
  it('should increase quantity of the target ammo in array with more than one launcher', () => {
    const action = { payload: { weapon: testM79(), magazine: testM79().mag[0] } };
    const newState = increaseLauncherAmmoReducer(characterWithM79AndM72(), action);
    expect(newState.totalWeight).toBe(5 + testM79().weight + testM79().mag[0].weight + testM72().weight);
    expect(newState.gear.launchers[1].mag[0].qty).toBe(1);
  });
});
