import { MockState } from '../mockState';
import { removeAllFirearmModificationsReducer } from './index';

const mockM1911A1 = () => ({
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
});

const mockM16 = (mag1, mag2) => ({
  name: 'M16',
  qty: 1,
  mag: [
    { type: 'Mag', weight: 0.7, cap: 20, qty: mag1 },
    { type: 'Mag', weight: 1, cap: 30, qty: mag2 },
  ],
});

const moddedM16 = (mag1, mag2) => {
  const m16 = mockM16(mag1, mag2);
  m16.modNotes = [{ note: 'test', weightMod: 1 }];
  m16.mag = [...m16.mag, { type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true }];

  return m16;
};

describe('removeAllFirearmModificationsReducer', () => {
  let state = new MockState();

  it('should return clean copy of the correct firearm', () => {
    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911A1(), moddedM16(0, 0)],
      } };

    const action = { payload: 'M16' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [mockM1911A1(), mockM16(0, 0)],
      } };

    state = removeAllFirearmModificationsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });

  it('should retain the same firearm and standard magazine qty values', () => {
    const m16 = moddedM16(2, 1);
    m16.mag[2].qty = 1;

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [m16],
      } };

    const action = { payload: 'M16' };

    const pureM16 = mockM16(2, 1);

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        firearms: [pureM16],
      } };

    state = removeAllFirearmModificationsReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
