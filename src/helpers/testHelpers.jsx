import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import App from '../components/App';
import { initialStore } from './initialStore';
import { MockState } from '../reducers/mockState';
import { pistols, rifles, shotguns } from '../data/firearms';
import { launchers } from '../data/launchers';

// mptodo

export const getStore = (mockStore = initialStore) => createStore(reducers, mockStore, applyMiddleware(thunk));

// export const mountComponentWithStore = (component, mockStore = initialStore) => {
//   const store = createStore(reducers, mockStore, applyMiddleware(thunk));

// mptodo -delete?
//   return mount(
//     <Provider store={store}>
//       <component />
//     </Provider>,
//   );
// };

export const mountAppWithStore = (mockStore = initialStore) => {
  const store = createStore(reducers, mockStore, applyMiddleware(thunk));

  return mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

// mptodo
// class StoreWithCharacterView extends MockState {
//   constructor(gun) {
//     super(gun);
//     this.currentCharacter.totalWeight += gun === undefined ? 0 : gun.weight;
//     this.currentView = 'createChar';
//     this.currentCharacter.firearms = gun === undefined ? [] : [gun];
//   }
// }

// mptodo - replace this shit
export const storeWithCreateCharacterView = (gun) => new StoreWithCharacterView(gun);

export const findFirearmByName = (list, gunName) => list.find((object) => object.name === gunName);

export const testM1911A1 = (qty = 1) => {
  const m1911A1 = findFirearmByName(pistols(), 'M1911A1');
  m1911A1.qty = qty;
  return m1911A1;
};

export const testM1911A1WithMods = () => {
  const moddedM1911A1 = testM1911A1();
  moddedM1911A1.weight += 1;
  moddedM1911A1.modNotes = [{ note: 'test', weightMod: 1 }];
  return moddedM1911A1;
};

export const testM16 = () => findFirearmByName(rifles(), 'M16');

export const testM16WithoutJhpAp = () => {
  const editedM16 = testM16();
  editedM16.projectiles = editedM16.projectiles.splice(0, 1);
  return editedM16;
};

export const testFAMAS = () => findFirearmByName(rifles(), 'FAMAS');

export const testRemington = () => findFirearmByName(shotguns(), 'Remington M870');

export const testM79 = (ammo = 0) => {
  const m79 = findFirearmByName(launchers(), 'M79');
  m79.mag[0].qty = ammo;
  return m79;
};

export const testM72 = (qty = 1) => {
  const m72 = findFirearmByName(launchers(), 'M72 A2 LAW');
  m72.qty = qty;
  return m72;
};

export const testM203 = (ammo = 0) => {
  const m203 = findFirearmByName(rifles(), 'M203');
  m203.mag[2].qty = ammo;
  return m203;
};
