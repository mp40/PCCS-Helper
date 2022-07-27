import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import App from '../components/App';
import { getInitialReduxState } from './initialStore';

export const getStore = (mockStore = getInitialReduxState()) => createStore(
  reducers,
  mockStore,
);

export const mountAppWithStore = (mockStore = getInitialReduxState()) => {
  const store = createStore(
    reducers,
    mockStore,
  );

  return mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};
