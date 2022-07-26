import reduceActions from './index';
import { getInitialReduxState } from '../helpers/initialStore';

describe('the reducer', () => {
  it('should return state if action.type is undefined', () => {
    const initialStore = getInitialReduxState();
    expect(reduceActions(undefined, { payload: undefined })).toMatchObject(initialStore);
  });
});
