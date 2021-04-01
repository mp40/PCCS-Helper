import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import App from '../components/App';
import { initialStore } from './initialStore';
import { MockState } from '../reducers/mockState';
import { pistols, rifles, shotguns } from '../data/firearms';
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

export const testM1911A1 = (qty = 1) => {
  const m1911A1 = findObjectByNameInArray(pistols(), 'M1911A1');
  m1911A1.qty = qty;
  return m1911A1;
};

export const testM1911A1WithMods = () => {
  const moddedM1911A1 = testM1911A1();
  moddedM1911A1.weight += 1;
  moddedM1911A1.modNotes = [{ note: 'test', weightMod: 1 }];
  return moddedM1911A1;
};

export const testM16 = () => findObjectByNameInArray(rifles(), 'M16');

export const testM16WithoutJhpAp = () => {
  const editedM16 = testM16();
  editedM16.projectiles = editedM16.projectiles.splice(0, 1);
  return editedM16;
};

export const testFAMAS = () => findObjectByNameInArray(rifles(), 'FAMAS');

export const testRemington = () => findObjectByNameInArray(shotguns(), 'Remington M870');

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

export const testM203 = (ammo = 0) => {
  const m203 = findObjectByNameInArray(rifles(), 'M203');
  m203.mag[2].qty = ammo;
  return m203;
};
