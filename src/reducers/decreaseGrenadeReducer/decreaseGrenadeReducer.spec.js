import { decreaseGrenadeReducer } from './index';
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

const characterWithTwoTNT = () => {
  const character = characterWithTNT();
  character.totalWeight += 10;
  character.gear.grenades[0].qty += 1;
  character.combatStats.baseSpeed = 2;
  character.combatStats.maxSpeed = 4;
  character.combatStats.combatActions = [3, 3];
  return character;
};

const characterWithGrenadeAndTNT = () => {
  const character = characterWithTNT();
  character.totalWeight += 0.9;
  character.gear.grenades = [...character.gear.grenades, getGrenadeData()];
  return character;
};

const characterWithTNTAndTwoGrenades = () => {
  const character = characterWithGrenadeAndTNT();
  character.totalWeight += 0.9;
  character.gear.grenades[1].qty += 1;
  return character;
};

describe('increaseGrenadeReducer function', () => {
  it('should decrease quantity of the grenade by one', () => {
    const action = { payload: getHeavyGrenadeData() };
    const newState = decreaseGrenadeReducer(characterWithTwoTNT(), action);
    expect(newState).toMatchObject(characterWithTNT());
  });
  it('should increase quantity of the target grenade in array with more than item', () => {
    const action = { payload: getGrenadeData() };
    const newState = decreaseGrenadeReducer(characterWithTNTAndTwoGrenades(), action);
    expect(newState.gear.grenades[1].name).toBe('L2 A2');
    expect(newState.gear.grenades[1].qty).toBe(1);
  });
});
