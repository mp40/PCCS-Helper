import { decreaseLauncherAmmoReducer } from './index';
import { testM79, testM72 } from '../../helpers/testHelpers';
import { MockState } from '../mockState';

const characterWithM79NoSpareAmmo = () => {
  const m79 = testM79();
  const character = new MockState();
  character.totalWeight += m79.weight;
  character.gear.launchers = [m79];
  character.combatStats.baseSpeed = 2.5;
  character.combatStats.maxSpeed = 5;
  character.combatStats.combatActions = [3, 3];
  return character;
};

const characterWithM79AndSpareRound = () => {
  const m79 = testM79(1);
  const character = new MockState();
  character.totalWeight += m79.weight + m79.mag[0].weight;
  character.gear.launchers = [m79];
  return character;
};

const characterWithM72AndM79AndSpareRound = () => {
  const m72 = testM72();
  const m79 = testM79(1);
  const character = new MockState();
  character.gear.launchers = [m72, m79];
  return character;
};

describe('decreaseLauncherAmmoReducer', () => {
  it('should decrease quantity of the ammo by one', () => {
    const magazine = testM79().mag[0];
    magazine.qty = 1;
    const action = { payload: { firearm: testM79(1), magazine } };
    const newState = decreaseLauncherAmmoReducer(characterWithM79AndSpareRound(), action);
    expect(newState).toMatchObject(characterWithM79NoSpareAmmo());
  });
  it('should increase quantity of the target ammo in array with more than one launcher', () => {
    const firearm = testM79(1);
    const magazine = firearm.mag[0];
    const action = { payload: { firearm, magazine } };
    const newState = decreaseLauncherAmmoReducer(characterWithM72AndM79AndSpareRound(), action);
    expect(newState.totalWeight).toBe(5 + testM79().weight + testM72().weight);
    expect(newState.gear.launchers[1].mag[0].qty).toBe(0);
  });
});
