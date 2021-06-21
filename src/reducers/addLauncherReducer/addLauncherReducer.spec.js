import { addLauncherReducer } from './index';
import { MockState } from '../mockState';

const m79 = {
  name: 'M79',
  qty: 1,
  mag: [{ weight: 0.51, qty: 0 }, { weight: 0.51, qty: 0 }],
};

const m72 = {
  name: 'M72 A2 LAW',
  qty: 2,
  mag: [{ weight: '-' }],
};

describe('addlauncherReducer function', () => {
  let state = new MockState();

  it('should add launcher to list', () => {
    const action = { payload: 'M79' };

    state = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [m72],
      } };

    const updatedState = { ...state,
      currentCharacter: {
        ...state.currentCharacter,
        launchers: [m72, m79],
      } };

    state = addLauncherReducer(state, action);

    expect(state).toMatchObject(updatedState);
  });
});
