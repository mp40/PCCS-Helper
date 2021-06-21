import { MockState } from '../mockState';
import { decreaseLauncherReducer } from './index';

describe('decreaselauncherReducer', () => {
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

  it('should decrease quantity of the launcher by one', () => {
    let state = new MockState();

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM79(), mockM72(2)],
      } };

    const action = { payload: 'M72' };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [mockM79(), mockM72(1)],
      } };

    state = decreaseLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
