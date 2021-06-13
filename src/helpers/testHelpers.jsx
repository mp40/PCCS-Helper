import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import App from '../components/App';
import { initialStore } from './initialStore';
import { MockState } from '../reducers/mockState';
import { launchers } from '../data/launchers';

import { findObjectByNameInArray } from '../utils';

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
    this.currentCharacter.totalWeight += gun.weight;
    this.currentCharacter.firearms = [gun];
  }
}

export const getStoreWithGun = (gun) => createStore(
  reducers,
  new CharacterWithGunStore(gun),
);

export const testM79 = (ammo = 0) => {
  const m79 = findObjectByNameInArray(launchers(), 'M79');
  m79.mag[0].qty = ammo;
  return m79;
};

export const testM72 = (qty) => {
  const m72 = findObjectByNameInArray(launchers(), 'M72 A2 LAW');
  m72.qty = qty;
  return m72;
};
