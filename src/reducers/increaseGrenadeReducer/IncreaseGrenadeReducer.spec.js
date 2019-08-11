import { increaseGrenadeReducer } from './index';
import { MockState } from '../mockState';

const getGrenadeData = () => ({
  name: 'L2 A2',
  qty: 1,
  w: 0.9,
});

const getHeavyGrenadeData = () => ({
  name: 'TNT',
  qty: 1,
  w: 10,
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

describe('increaseGrenadeReducer function', () => {
  it('should increase quantity of the gun by one', () => {
    const action = { payload: getHeavyGrenadeData() };
    const newState = increaseGrenadeReducer(characterWithTNT(), action);
    expect(newState).toMatchObject(characterWithTwoTNT());
  });
  it('should increase quantity of the target gun in array with more than item', () => {
    const action = { payload: getGrenadeData() };
    const newState = increaseGrenadeReducer(characterWithGrenadeAndTNT(), action);
    expect(newState.gear.grenades[1].name).toBe('L2 A2');
    expect(newState.gear.grenades[1].qty).toBe(2);
  });
});
