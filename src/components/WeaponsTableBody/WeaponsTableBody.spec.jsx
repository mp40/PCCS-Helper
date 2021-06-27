import React from 'react';
import { shallow } from 'enzyme';
import WeaponsTableBody from './component';

import { firearms } from '../../data/firearms';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM1911A1 = () => ({ ...firearms.M1911A1 });

const m2Grenade = {
  name: 'M2',
  qty: 1,
  length: 4.5,
  weight: 1.3,
  at: 3,
  fl: 2,
  r: 13,
  data: {
    pen: ['PEN', 2.3, 1, 1, 1, 1, '', ''],
    dc: ['DC', 10, 2, 2, 2, 2, '', ''],
    bshc: ['BSHC', '*2', 2, -1, -6, -9, '', ''],
    bc: ['BC', '43H', 335, 95, 30, 15, 7, 4],
  },
  heading: 'standard',
};

const increaseFirearmQty = jest.fn();
const decreaseFirearmQty = jest.fn();
const toggleModifyWeapon = jest.fn();
const removeFirearm = jest.fn();
const increaseMagazineQty = jest.fn();
const decreaseMagazineQty = jest.fn();
const increaseUnderslungLauncherAmmo = jest.fn();
const decreaseUnderslungLauncherAmmo = jest.fn();
const increaseLauncherQty = jest.fn();
const decreaseLauncherQty = jest.fn();
const increaseLauncherAmmo = jest.fn();
const decreaseLauncherAmmo = jest.fn();
const removeLauncher = jest.fn();
const removeGrenade = jest.fn();
const increaseGrenadeQty = jest.fn();
const decreaseGrenadeQty = jest.fn();

const m1911Qty1 = {
  name: 'M1911A1',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }],
  modNotes: [],
};

const pistolSingleRounds = {
  ...m1911Qty1,
  mag: [{ type: 'Rnd', weight: 0.7, cap: 7, qty: 1 }],
};

describe('Selected Firearms Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WeaponsTableBody
        firearms={[]}
        grenades={[]}
        launchers={[]}
        increaseFirearmQty={increaseFirearmQty}
        decreaseFirearmQty={decreaseFirearmQty}
        toggleModifyWeapon={toggleModifyWeapon}
        removeFirearm={removeFirearm}
        increaseMagazineQty={increaseMagazineQty}
        decreaseMagazineQty={decreaseMagazineQty}
        increaseUnderslungLauncherAmmo={increaseUnderslungLauncherAmmo}
        decreaseUnderslungLauncherAmmo={decreaseUnderslungLauncherAmmo}
        increaseLauncherQty={increaseLauncherQty}
        decreaseLauncherQty={decreaseLauncherQty}
        increaseLauncherAmmo={increaseLauncherAmmo}
        decreaseLauncherAmmo={decreaseLauncherAmmo}
        removeLauncher={removeLauncher}
        removeGrenade={removeGrenade}
        increaseGrenadeQty={increaseGrenadeQty}
        decreaseGrenadeQty={decreaseGrenadeQty}
        totalWeaponWeight={1337}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return "Single Rounds" if type is "Rnd"', () => {
    wrapper.setProps({ firearms: [pistolSingleRounds] });

    expect(wrapper.find('GearTableEntry').at(1).props().text).toBe('Single Round');
  });

  it('should return "Single Rounds" if type is "Rnd"', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });

    expect(wrapper.find('GearTableEntry').at(1).props().text).toBe('7 round Mag');
  });

  it('should render no weapons if none provided', () => {
    expect(wrapper.find('GearTableEntry').exists()).toBe(false);
  });

  it('should render provided firearms', () => {
    wrapper.setProps({ firearms: [testFAMAS(), testM1911A1()] });

    expect(wrapper.find('GearTableEntry').at(0).props().text).toBe('FAMAS');
    expect(wrapper.find('GearTableEntry').at(2).props().text).toBe('M1911A1');
  });

  it('should not decrease firearm less than one', () => {
    wrapper.setProps({ firearms: [testFAMAS()] });

    wrapper.find('GearTableEntry').at(0).invoke('decreaseItem')();

    expect(decreaseFirearmQty).not.toHaveBeenCalled();
  });

  it('should not decrease magazine less than zero', () => {
    wrapper.setProps({ firearms: [testFAMAS()] });

    wrapper.find('GearTableEntry').at(1).invoke('decreaseItem')();

    expect(decreaseMagazineQty).not.toHaveBeenCalled();
  });

  it('should render provided grenades', () => {
    wrapper.setProps({ grenades: [m2Grenade] });

    expect(wrapper.find('GearTableEntry').at(0).props().text).toBe('M2');
  });

  it('should render provided launchers', () => {
    const m72 = {
      name: 'M72 A2 LAW',
      qty: 1,
      mag: [{ weight: '-' }],
    };

    const m79 = {
      name: 'M79',
      qty: 1,
      mag: [{ class: 'HEAT', weight: 0.51, qty: 0 }, { class: 'HE', weight: 0.51, qty: 0 }],
    };

    wrapper.setProps({ launchers: [m72, m79] });

    expect(wrapper.find('GearTableEntry').at(0).props().text).toBe('M72 A2 LAW');
    expect(wrapper.find('GearTableEntry').at(1).props().text).toBe('M79');
  });
});
