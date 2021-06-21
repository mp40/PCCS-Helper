import { MockState } from '../mockState';
import { increaseLauncherReducer } from './index';

const mockM79 = () => ({
  name: 'M79',
  weight: 6.5,
  qty: 1,
  mag: [{ class: 'HEAT', weight: 0.51, qty: 0 }, { class: 'HE', weight: 0.51, qty: 0 }],
});

const mockM72 = (qty = 1) => ({
  name: 'M72',
  weight: 5.2,
  qty,
  mag: [{ weight: '-' }],
});

describe('increaseLauncherReducer', () => {
  let state = new MockState();

  state = { ...state,
    currentCharacter: {
      ...state.currentCharacter,
      launchers: [mockM72(1), mockM79()],
    } };

  it('should increase quantity of the launcher by one', () => {
    const action = { payload: 'M72' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM72(2), mockM79()],
      } };

    state = increaseLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
