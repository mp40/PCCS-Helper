/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import WeaponsTableBody from './component';

import { getStore, testFAMAS, testM1911A1, testM79, testM72 } from '../../helpers/testHelpers';

import { renderCorrectAmmoTitle } from '../GearRow';


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

describe('rendering the correct information', () => {
  it('should return "Single Rounds" if type is "Rnd"', () => {
    const magObj = { type: 'Rnd', cap: '7' };
    expect(renderCorrectAmmoTitle(magObj)).toBe('Single Rounds');
  });
  it('should return "Single Rounds" if type is "Rnd"', () => {
    const magObj = { type: 'Mag', cap: '30' };
    expect(renderCorrectAmmoTitle(magObj)).toBe('30 round Mag');
  });
});

describe('rendering weapons', () => {
  const toggleModifyWeapon = jest.fn();
  const selectedGuns = [];
  const selectedGrenades = [];
  const selectedLaunchers = [];
  const removeGrenade = jest.fn();
  const increaseGrenadeQty = jest.fn();
  const decreaseGrenadeQty = jest.fn();
  const removeFirearm = jest.fn();
  const increaseFirearmQty = jest.fn();
  const decreaseFirearmQty = jest.fn();
  const increaseMagazineQty = jest.fn();
  const decreaseMagazineQty = jest.fn();
  const increaseLauncherQty = jest.fn();
  const decreaseLauncherQty = jest.fn();
  const removeLauncher = jest.fn();
  const increaseLauncherAmmo = jest.fn();
  const decreaseLauncherAmmo = jest.fn();
  const getProps = () => ({
    toggleModifyWeapon,
    selectedGuns,
    selectedGrenades,
    selectedLaunchers,
    removeGrenade,
    increaseGrenadeQty,
    decreaseGrenadeQty,
    removeFirearm,
    increaseFirearmQty,
    decreaseFirearmQty,
    increaseMagazineQty,
    decreaseMagazineQty,
    increaseLauncherQty,
    decreaseLauncherQty,
    removeLauncher,
    increaseLauncherAmmo,
    decreaseLauncherAmmo,
  });
  describe('default render', () => {
    const props = getProps();
    const wrapper = shallow(<WeaponsTableBody {...props} />);
    it('should render no weapons if none provided', () => {
      expect(wrapper.find('GearRow').at(0).dive().exists()).toBe(false);
      expect(wrapper.find('GearRow').at(1).dive().exists()).toBe(false);
      expect(wrapper.find('GearRow').at(2).dive().exists()).toBe(false);
    });
  });
  describe('rendering firearms', () => {
    const props = getProps();
    props.selectedGuns = [testFAMAS(), testM1911A1()];
    const wrapper = shallow(<WeaponsTableBody {...props} />);
    it('should render provided firearms', () => {
      const firearmsList = wrapper.find('GearRow').at(0).dive();
      expect(firearmsList.length).toBe(2);
      expect(firearmsList.at(0).text()).toContain('FAMAS');
      expect(firearmsList.at(1).text()).toContain('M1911A1');
    });
  });
  describe('rendering grenades', () => {
    const props = getProps();
    props.selectedGrenades = [m2Grenade];
    const wrapper = shallow(<WeaponsTableBody {...props} />);
    it('should render provided firearms', () => {
      const grenadeList = wrapper.find('GearRow').at(1).dive();
      expect(grenadeList.length).toBe(1);
      expect(grenadeList.at(0).text()).toContain('M2');
    });
  });
  describe('rendering launchers', () => {
    const props = getProps();
    props.selectedLaunchers = [testM79(), testM72(2)];
    const wrapper = mount(<WeaponsTableBody {...props} />, {
      attachTo: document.createElement('table'),
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should render provided launchers', () => {
      expect(wrapper.find('.M79Row').exists()).toBe(true);
      expect(wrapper.find('.M72A2LAWRow').exists()).toBe(true);
    });
    it('should be possible to increment launcher', () => {
      const m79Row = wrapper.find('.M79Row');
      m79Row.find('#qtyUpLauncher').simulate('click');
      expect(increaseLauncherQty).toHaveBeenCalledWith(testM79());
    });
    it('should be possible to decrement launcher if qty more than 1', () => {
      const m72Row = wrapper.find('.M72A2LAWRow');
      m72Row.find('#qtyDownLauncher').simulate('click');
      expect(decreaseLauncherQty).toHaveBeenCalledWith(testM72(2));
    });
    it('should not be possible to decrement launcher if qty is 1', () => {
      const m79Row = wrapper.find('.M79Row');
      m79Row.find('#qtyDownLauncher').simulate('click');
      expect(decreaseLauncherQty).not.toHaveBeenCalled();
    });
    it('should be possible to remove launcher', () => {
      const m72Row = wrapper.find('.M72A2LAWRow');
      m72Row.find('.removeM72A2LAW').simulate('click');
      expect(removeLauncher).toHaveBeenCalledWith(testM72(2));
    });
    it('should display types of spare rounds to increment', () => {
      const m79HeatAmmo = wrapper.find('.spareMagRow').at(0);
      const m79HeAmmo = wrapper.find('.spareMagRow').at(1);
      expect(m79HeatAmmo.text()).toContain('0 x HEAT');
      expect(m79HeAmmo.text()).toContain('0 x HE');
    });
    it('should not display spare rounds for disposable weapons', () => {
      const m72Ammo = wrapper.find('.spareMagRow').at(2);
      expect(m72Ammo.exists()).toBe(false);
    });
    it('should possible to increment launcher ammo up', () => {
      const m79Ammo = wrapper.find('.spareMagRow').at(0);
      m79Ammo.find('#qtyUpMagType1').simulate('click');
      expect(increaseLauncherAmmo).toHaveBeenCalledWith({ weapon: testM79(), magazine: testM79().mag[0] });
    });
    it('should possible to increment launcher ammo down', () => {
      const tempProps = getProps();
      tempProps.selectedLaunchers = [testM79(1)];
      const m79Ammo = mount(<WeaponsTableBody {...tempProps} />, {
        attachTo: document.createElement('table'),
      });
      m79Ammo.find('#qtyDownMagType1').simulate('click');
      expect(decreaseLauncherAmmo).toHaveBeenCalledWith({ weapon: testM79(1), magazine: testM79(1).mag[0] });
    });
    it('should not be possible to decrement ammo if it is 0', () => {
      const m79Ammo = wrapper.find('.spareMagRow').at(0);
      m79Ammo.find('#qtyDownMagType1').simulate('click');
      expect(increaseLauncherAmmo).not.toHaveBeenCalled();
    });
  });
});
