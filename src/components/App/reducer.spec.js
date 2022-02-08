import reducer from './reducer';

describe('App reducer', () => {
  it('should return default if no action type match', () => {
    const state = { default: 'state' };
    const action = { action: 'NOT_A_MATCH_AT_ALL' };

    const result = reducer(state, action);
    expect(result).toEqual(state);
  });
});
