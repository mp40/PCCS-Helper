import { MockState } from '../mockState';
import { replaceMagazineReducer } from './index';

const mockM16 = () => ({
  name: 'M16',
  qty: 1,
  weight: 8.7,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: 0 },
    { type: 'Mag', weight: 1, cap: 30, qty: 0 },
  ],
});

const mockM16RemovedMag = () => {
  const gun = mockM16();
  gun.mag[1].removed = true;

  return gun;
};

const mockM1911A1 = () => ({
  name: 'M1911A1',
  qty: 1,
  weight: 3,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
});

describe('removeMagazineReducer', () => {
  let state = new MockState();

  it('should replace selected removed magazine', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM16().weight + mockM1911A1().weight,
        baseSpeed: 2,
        maxSpeed: 4,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM1911A1(), mockM16RemovedMag()],
      } };

    const action = { payload: {
      firearm: 'M16',
      magazine: { type: 'Mag', weight: 1, cap: 30, qty: 0, removed: true },
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911A1(), mockM16()],
      } };

    state = replaceMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[1].mag[1].removed).toBe(false);
  });
});
