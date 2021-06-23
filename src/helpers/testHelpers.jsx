import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import App from '../components/App';
import { initialStore } from './initialStore';
import { MockState } from '../reducers/mockState';

export const getStore = (mockStore = initialStore) => createStore(
  reducers,
  mockStore,
);

export const mountAppWithStore = (mockStore = initialStore) => {
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

class CharacterWithGunStore extends MockState {
  constructor(gun) {
    super(gun);
    this.currentView = 'createChar';
    this.currentCharacter.firearms = [gun];
  }
}

export const getStoreWithGun = (gun) => createStore(
  reducers,
  new CharacterWithGunStore(gun),
);
