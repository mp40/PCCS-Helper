import { MockState } from '../mockState';
import { removeMagazineReducer } from './index';
import { correctFloatingPoint } from '../reducerHelpers';

const mockM16 = (ammo1, ammo2) => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: ammo1 },
    { type: 'Mag', weight: 1, cap: 30, qty: ammo2 },
  ],
});

describe('removeMagazineReducer', () => {
  let state = new MockState();

  it('should set selected magazine for selected firearm to 0 and mark as removed', () => {
    const m16 = mockM16(1, 2);
    const ammoWeight = (m16.mag[0].qty * m16.mag[0].weight) + (m16.mag[1].qty * m16.mag[1].weight);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + m16.weight + ammoWeight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16(1, 1)],
      } };

    const action = { payload: { firearm: 'M16', magazine: { type: 'Mag', weight: 1, cap: 30, qty: 2 } } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(5 + m16.weight + m16.mag[0].weight),
        baseSpeed: 2.5,
        maxSpeed: 5,
        firearms: [mockM16(1, 0)],
      } };

    state = removeMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[0].mag[1].qty).toBe(0);
    expect(state.currentCharacter.firearms[0].mag[1].removed).toBe(true);
    expect(state.currentCharacter.firearms[0].mag.length).toBe(2);
  });

  it('should delete custom magazines from the firearm', () => {
    const m16 = mockM16(1, 0);
    m16.mag.push({ type: 'Mag', weight: 1.1, cap: 40, qty: 2, custom: true });
    const ammoWeight = (m16.mag[0].qty * m16.mag[0].weight) + (m16.mag[2].qty * m16.mag[2].weight);

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + m16.weight + ammoWeight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [m16],
      } };

    const action = { payload: { firearm: 'M16', magazine: { type: 'Mag', weight: 1.1, cap: 40, qty: 2, custom: true } } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: correctFloatingPoint(5 + m16.weight + m16.mag[0].weight),
        baseSpeed: 2.5,
        maxSpeed: 5,
        firearms: [mockM16(1, 0)],
      } };

    state = removeMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[0].mag.length).toBe(2);
  });
});
