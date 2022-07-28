import { createStore } from 'redux';
import reducers from '../reducers';

import { getInitialReduxState } from './initialStore';

export const getStore = (mockStore = getInitialReduxState()) => createStore(
  reducers,
  mockStore,
);
