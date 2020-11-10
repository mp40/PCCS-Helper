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

describe('removeMagazineReducer', () => {
  let state = new MockState();

  it('should replace selected removed magazine', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        totalWeight: 5 + mockM16().weight,
        baseSpeed: 2.5,
        maxSpeed: 5,
        gunCombatActions: 3,
        handCombatActions: 3,
        firearms: [mockM16RemovedMag()],
      } };

    const action = { payload: {
      firearm: 'M16',
      magazine: { type: 'Mag', weight: 1, cap: 30, qty: 0, removed: true },
    } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM16()],
      } };

    state = replaceMagazineReducer(state, action);

    expect(state).toMatchObject(updatedState);
    expect(state.currentCharacter.firearms[0].mag[1].removed).toBe(false);
  });
});
