import reduceActions from './index';
import { initialStore } from '../helpers/initialStore';

describe('the reducer', () => {
  it('should have default state if state is undefined', () => {
    // TODO
  });
  it('should return state if action.type is undefined', () => {
    expect(reduceActions(undefined, { payload: undefined })).toMatchObject(initialStore);
  });
});
