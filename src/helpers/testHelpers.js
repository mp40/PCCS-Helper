import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import App from '../App';
import { initialStore } from './initialStore';
import { MockState } from '../reducers/mockState';
import { pistols, rifles, shotguns } from '../data/firearms';

export const mountAppWithStore = (mockStore = initialStore) => {
  const store = createStore(reducers, mockStore, applyMiddleware(thunk));

  return mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

export const createWrapperTextInput = wrapper => ((name, value) => wrapper.find(name).simulate('change', { target: { value } }));

class StoreWithEquipment extends MockState {
  constructor() {
    super();
    this.gear.equipment = [{ name: 'newEquipment', weight: 1337, qty: 1, tags: ['test'] }];
  }
}
export const storeWithEquipment = () => new StoreWithEquipment();

class StoreWithCharacterView extends MockState {
  constructor(gun) {
    super(gun);
    this.currentView = 'createChar';
    this.gear.firearms = gun === undefined ? [] : [gun];
  }
}
export const storeWithCreateCharacterView = gun => new StoreWithCharacterView(gun);

export const findFirearmByName = (list, gunName) => list.find(object => object.name === gunName);

export const testM1911A1 = (qty = 1) => {
  const m1911A1 = findFirearmByName(pistols(), 'M1911A1');
  m1911A1.qty = qty;
  return m1911A1;
};

export const testM1911A1WithMods = (() => {
  const moddedM1911A1 = testM1911A1();
  moddedM1911A1.modNotes = [{ note: 'test', weightMod: 1 }];
  return moddedM1911A1;
});

export const testM16 = () => findFirearmByName(rifles(), 'M16');

export const testM16WithoutJhpAp = () => {
  const editedM16 = testM16();
  editedM16.projectiles = editedM16.projectiles.splice(0, 1);
  return editedM16;
};

export const testFAMAS = () => findFirearmByName(rifles(), 'FAMAS');

export const testRemington = () => findFirearmByName(shotguns(), 'Remington M870');
