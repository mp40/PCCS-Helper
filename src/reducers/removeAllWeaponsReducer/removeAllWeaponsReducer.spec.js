import { removeAllWeaponsReducer } from './index';
import { MockState } from '../mockState';

const mockM1911A1 = (qty, ammo) => ({
  name: 'M1911A1',
  qty,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: ammo }],
});

const mockM16 = (ammo1, ammo2) => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: ammo1 },
    { type: 'Mag', weight: 1, cap: 30, qty: ammo2 },
  ],
});

const mockLightGrenade = (qty) => ({
  name: 'L2 A2',
  qty,
  weight: 0.9,
});

const mockHeavyGrenade = (qty) => ({
  name: 'TNT',
  qty,
  weight: 10,
});

const mockM79 = (ammo) => ({
  name: 'M79',
  weight: 6.5,
  qty: 1,
  mag: [{ class: 'HEAT', weight: 0.51, qty: ammo }, { class: 'HE', weight: 0.51, qty: 0 }],
});

const mockM72 = (qty) => ({
  name: 'M72',
  weight: 5.2,
  qty,
  mag: [{ weight: '-' }],
});

describe('removeAllWeaponsReducer function', () => {
  let state = new MockState();

  it('should return correct values when all weapons removed from list', () => {
    const m16 = mockM16(2, 1);
    const m1911A1 = mockM1911A1(2, 2);

    const ammoWeight = (m16.mag[0].qty + m16.mag[0].weight)
    + (m16.mag[1].qty + m16.mag[1].weight)
    + (m1911A1.mag[0].qty + m1911A1.mag[0].weight);

    const gunWeight = m16.weight + (m1911A1.weight * m1911A1.qty) + ammoWeight;

    const lightGrenades = mockLightGrenade(2);
    const heavyGrenade = mockHeavyGrenade(1);
    const grenadeWeight = (lightGrenades.weight * lightGrenades.qty) + (heavyGrenade.weight * heavyGrenade.qty);

    const m79 = mockM79(2);
    const m72 = mockM72(2);
    const launcherAmmoWeight = m79.mag[0].qty * m79.mag[0].weight;
    const launchersWeight = m79.weight + launcherAmmoWeight + (m72.weight * m72.qty);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + gunWeight + grenadeWeight + launchersWeight,
        baseSpeed: 1,
        maxSpeed: 2,
        gunCombatActions: 1,
        handCombatActions: 1,
        firearms: [m16, m1911A1],
        grenades: [lightGrenades, heavyGrenade],
        launchers: [m79, m72],
      } };

    const action = { payload: [] };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5,
        baseSpeed: 3,
        maxSpeed: 6,
        gunCombatActions: 4,
        handCombatActions: 4,
        firearms: [],
        grenades: [],
        launchers: [],
      } };

    state = removeAllWeaponsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
