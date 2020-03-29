import { addLauncherReducer } from './index';
import { MockState } from '../mockState';

const testGrenadeLauncher = () => ({
  weight: 6,
  qty: 1,
  mag: [{ weight: 0.5, qty: 2 }, { weight: 0.6, qty: 1 }],
});

const testAntiTank = () => ({
  weight: 5,
  qty: 2,
  mag: [{ weight: '-' }],
});

const characterWithM79 = () => addLauncherReducer(new MockState(), { payload: testGrenadeLauncher() });

describe('addlauncherReducer function', () => {
  it('should return correct values when launcher added to empty list', () => {
    const m79 = testGrenadeLauncher();
    const action = { payload: m79 };
    const newState = addLauncherReducer(new MockState(), action);
    expect(newState.totalWeight).toBe(12.6);
    expect(newState.gear.launchers.length).toBe(1);
    expect(newState.gear.launchers[0]).toEqual(m79);
    expect(newState.combatStats.baseSpeed).toBe(2.5);
    expect(newState.combatStats.maxSpeed).toBe(5);
    expect(newState.combatStats.combatActions).toEqual([3, 3]);
  });
  it('should return correct values when additional launcher added', () => {
    const antiTank = testAntiTank();
    const action = { payload: antiTank };
    const newState = addLauncherReducer(characterWithM79(), action);
    expect(newState.totalWeight).toBe(22.6);
    expect(newState.gear.launchers.length).toBe(2);
    expect(newState.gear.launchers[1]).toEqual(antiTank);
  });
});
