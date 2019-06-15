import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import App from '../App';
import { initialStore } from './initialStore';

export const mountAppWithStore = (mockStore = initialStore) => {
  const store = createStore(reducers, mockStore, applyMiddleware(thunk));

  return mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

export const storeWithEquipment = () => ({
  currentView: 'home',
  totalWeight: 0,
  characterStats: {},
  combatStats: {
    baseSpeed: 0,
    maxSpeed: 0,
    SAL: 0,
    CE: 0,
    ISF: 0,
    ASF: 0,
    knockoutValue: 0,
    damageBonus: 0,
    combatActions: [0, 0],
  },
  gear: {
    equipment: [{ name: 'newEquipment', weight: 1337, qty: 1, tags: ['test'] }],
  },
});

export const storeWithCreateCharacterView = (gun = null) => {
  const character = {
    currentView: 'createChar',
    totalWeight: 0,
    characterStats: {},
    combatStats: {
      baseSpeed: 0,
      maxSpeed: 0,
      SAL: 0,
      CE: 0,
      ISF: 0,
      ASF: 0,
      knockoutValue: 0,
      damageBonus: 0,
      combatActions: [0, 0],
    },
    gear: {
      uniform: 'Normal',
      equipment: [],
      firearms: [],
    },
  };

  if (gun) {
    character.gear.firearms = [gun];
  }
  return character;
};

export const testM1911A1 = () => ({
  name: 'M1911A1',
  list: 'pistols',
  type: ['Automatic Pistol', 'USA', 'Cold War', 'WW2', '.45 ACP', 'West Is Best'],
  qty: 1,
  length: 9,
  weight: 3,
  rt: 4,
  rof: '*',
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 2 }],
  kd: 5,
  sab: 5,
  aim: {
    ac: [1, 2, 3, 4, 5, 6],
    mod: [-18, -11, -10, -9, -8, -7],
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1],
      dc: [3, 3, 2, 1, 1, 1, 1, 1],
    },
    {
      type: 'JHP',
      pen: [1.5, 1.4, 1.2, 0.9, 0.7, 0.3, 0.1, 0.1],
      dc: [4, 4, 3, 2, 1, 1, 1, 1],
    },
    {
      type: 'AP',
      pen: [2.2, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
      dc: [3, 3, 2, 1, 1, 1, 1, 1],
    },
  ],
  ba: [45, 36, 27, 20, 15, 5, 0, -4],
  tof: [1, 2, 3, 5, 8, 19, 31, 45],
  offical: true,
});

export const testM203 = () => ({
  name: 'M203',
  list: 'rifles',
  type: ['Battle/Assault Rifle', 'USA', 'Cold War', '5.56 NATO', 'West Is Best'],
  length: 39,
  weight: 11.6,
  rt: 8,
  rof: '*7',
  mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 0 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
  kd: 4,
  sab: 3,
  aim: {
    ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    mod: [-25, -15, -9, -8, -6, -5, -4, -3, -2, -1, 0],
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [17, 16, 15, 13, 11, 7.1, 4.5, 2.9],
      dc: [6, 6, 6, 6, 5, 4, 3, 2],
    },
  ],
  ma: [0.4, 0.8, 2, 3, 4, 8, 11, 15],
  ba: [60, 51, 42, 35, 30, 20, 15, 11],
  tof: [0, 0, 1, 1, 2, 4, 7, 10],
  offical: true,
  underslung: true,
});

export const testFAMAS = () => ({
  name: 'FAMAS',
  list: 'rifles',
  type: ['Battle/Assault Rifle', 'France', 'Cold War', '5.56 NATO', 'West Is Best'],
  length: 30,
  weight: 9,
  rt: 10,
  rof: '**8',
  mag: [{ type: 'Mag', weight: 1, cap: 25, qty: 0 }],
  kd: 4,
  sab: 3,
  aim: {
    ac: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    mod: [-23, -12, -9, -7, -6, -4, -3, -2, -1],
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [15, 15, 13, 12, 10, 6.4, 4.1, 2.6],
      dc: [6, 6, 6, 6, 5, 4, 3, 2],
    },
    {
      type: 'JHP',
      pen: [15, 14, 13, 11, 9.7, 6.2, 3.9, 2.5],
      dc: [8, 8, 7, 7, 7, 6, 4, 3],
    },
    {
      type: 'AP',
      pen: [22, 21, 19, 16, 14, 9.1, 5.8, 3.7],
      dc: [6, 6, 6, 5, 5, 4, 3, 2],
    },
  ],
  trb: [-6, -1, 4, 8, 10, 15, 18, 20],
  ma: [0.4, 0.8, 2, 3, 4, 8, 12, 16],
  ba: [60, 51, 42, 35, 30, 20, 15, 11],
  tof: [0, 0, 1, 1, 2, 5, 8, 11],
  offical: true,
  bipod: true,
});

export const testM16 = () => ({
  name: 'M16',
  list: 'rifles',
  type: ['Battle/Assault Rifle', 'USA', 'Cold War', '5.56 NATO', 'West Is Best'],
  length: 39,
  weight: 8.7,
  rt: 8,
  rof: '*7',
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  kd: 4,
  sab: 3,
  aim: [-22, -12, -9, -7, -6, -5, -4, -3, -2, -1, 0],
  fmj: {
    pen: [17, 16, 15, 13, 11, 7.1, 4.5, 2.9],
    dc: [6, 6, 6, 6, 5, 4, 3, 2],
  },
  ma: [0.4, 0.8, 2, 3, 4, 8, 11, 15],
  ba: [60, 51, 42, 35, 30, 20, 15, 11],
  tof: [0, 0, 1, 1, 2, 4, 7, 10],
  offical: true,
});

export const testRemington = () => ({
  name: 'Remington M870',
  list: 'shotguns',
  type: ['Shotgun', 'USA', 'Cold War', '12 gauge', 'West Is Best'],
  length: 42,
  weight: 8.8,
  rt: 30,
  rof: '2',
  mag: [{ type: 'Rnd', weight: 0.13, cap: 7, qty: 0 }],
  kd: 25,
  sab: 12,
  aim: {
    ac: [1, 3, 3, 4, 5, 6, 7, 8],
    mod: [-23, -12, -9, -7, -6, -4, -3, -2],
  },
  projectiles: [
    {
      type: 'Slug',
      pen: [7.7, 7.7, 7.6, 7.5, 7.5, 7.4, 7.3, 7.2, 6.9, 6.7, 5.7],
      dc: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9],
    },
    {
      type: ['Shot', '(00)', 12],
      pen: [5.4, 1.7, 1.7, 1.6, 1.6, 1.6, 1.4, 1.4, 1.2, 1.0, 0.6],
      dc: [8, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1],
      salm: [-14, -9, -4, -1, 1, 2, 5, 7, 10, 12, 17],
      bphc: ['solid', '*11', '*10', '*9', '*7', '*5', '*2', '*1', 62, 35, 8],
      pr: ['.0', '.0', '.0', 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.7],
    },
  ],
  ba: [67, 58, 48, 42, 38, 35, 29, 25, 19, 15, 5],
  tof: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4],
  offical: true,
});

export const testM1911A1WithMods = () => ({
  name: 'M1911A1',
  list: 'pistols',
  type: ['Automatic Pistol', 'USA', 'Cold War', 'WW2', '.45 ACP', 'West Is Best'],
  qty: 1,
  length: 9,
  weight: 4,
  rt: 4,
  rof: '*',
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }, { type: 'TestMag', weight: 1, cap: 10, qty: 0, custom: true }],
  kd: 5,
  sab: 5,
  aim: {
    ac: [1, 2, 3, 4, 5, 6],
    mod: [-18, -11, -10, -9, -8, -7],
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [1.6, 1.5, 1.2, 1.0, 0.8, 0.3, 0.2, 0.1],
      dc: [3, 3, 2, 1, 1, 1, 1, 1],
    },
    {
      type: 'JHP',
      pen: [1.5, 1.4, 1.2, 0.9, 0.7, 0.3, 0.1, 0.1],
      dc: [4, 4, 3, 2, 1, 1, 1, 1],
    },
    {
      type: 'AP',
      pen: [2.2, 2.1, 1.8, 1.4, 1.1, 0.5, 0.2, 0.1],
      dc: [3, 3, 2, 1, 1, 1, 1, 1],
    },
  ],
  ba: [45, 36, 27, 20, 15, 5, 0, -4],
  tof: [1, 2, 3, 5, 8, 19, 31, 45],
  offical: true,
  modNotes: [{ note: 'test', weightMod: 1 }],
});
