import { MockState } from '../mockState';
import { setPrimaryMagazineReducer } from './index';

const mockM1911A1 = (qty, ammo) => ({
  name: 'M1911A1',
  qty,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: ammo }],
});

const mockM16 = () => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
  ],
});

describe('setPrimaryMagazineReducer function', () => {
  let state = new MockState();

  it('should set the primary magazine for the correct weapon', () => {
    const totalWeight = 5 + mockM16().weight + mockM1911A1().weight;
    const updatedM16Weight = mockM16().weight - mockM16().mag[0].weight + mockM16().mag[1].weight;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM1911A1, mockM16()],
      } };

    const action = { payload: { firearm: 'M16', magazine: 1 } };

    state = setPrimaryMagazineReducer(state, action);

    expect(state.currentCharacter.firearms[1].mag[0]).toMatchObject(mockM16().mag[1]);
    expect(state.currentCharacter.firearms[1].mag[1]).toMatchObject(mockM16().mag[0]);
    expect(state.currentCharacter.firearms[1].weight).toBe(updatedM16Weight);
    expect(state.currentCharacter.totalWeight).toBe(totalWeight);
  });
});
