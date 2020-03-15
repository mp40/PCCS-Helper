import { addGrenadeReducer } from './index';
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

const characterWithTNT = () => addGrenadeReducer(new MockState(), { payload: getHeavyGrenadeData() });

describe('addGreandeReducer function', () => {
  it('should return correct values when grenade added to empty list', () => {
    const grenade = getHeavyGrenadeData();
    const action = { payload: grenade };
    const newState = addGrenadeReducer(new MockState(), action);
    expect(newState.totalWeight).toBe(15);
    expect(newState.gear.grenades.length).toBe(1);
    expect(newState.gear.grenades[0]).toEqual(grenade);
    expect(newState.combatStats.baseSpeed).toBe(2.5);
    expect(newState.combatStats.maxSpeed).toBe(5);
    expect(newState.combatStats.combatActions).toEqual([3, 3]);
  });
  it('should return correct values when additional grenade added', () => {
    const grenade = getGrenadeData();
    const action = { payload: grenade };
    const newState = addGrenadeReducer(characterWithTNT(), action);
    expect(newState.totalWeight).toBe(15.9);
    expect(newState.gear.grenades.length).toBe(2);
    expect(newState.gear.grenades[1]).toEqual(grenade);
  });
});
