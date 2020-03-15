import { removeGrenadeReducer } from './index';
import { MockState } from '../mockState';

const getGrenadeData = () => ({
  name: 'L2 A2',
  qty: 1,
  weight: 0.9,
});

const getHeavyGrenadeData = () => ({
  name: 'TNT',
  qty: 1,
  weight: 10,
});

const characterWithTNT = () => {
  const character = new MockState();
  character.totalWeight += 10;
  character.gear.grenades = [getHeavyGrenadeData()];
  character.combatStats.baseSpeed = 2.5;
  character.combatStats.maxSpeed = 5;
  character.combatStats.combatActions = [3, 3];
  return character;
};

const characterWithGrenadeAndTNT = () => {
  const character = characterWithTNT();
  character.totalWeight += 0.9;
  character.gear.grenades = [...character.gear.grenades, getGrenadeData()];
  return character;
};

describe('removeGrenadeReducer function', () => {
  it('should return correct values when grenade removed from list', () => {
    const action = { payload: getHeavyGrenadeData() };
    const newState = removeGrenadeReducer(characterWithTNT(), action);
    expect(newState).toMatchObject(new MockState());
  });
  it('should return correct values when grenade removed from list with more than one grenade type', () => {
    const action = { payload: getGrenadeData() };
    const newState = removeGrenadeReducer(characterWithGrenadeAndTNT(), action);
    expect(newState).toMatchObject(characterWithTNT());
  });
});
