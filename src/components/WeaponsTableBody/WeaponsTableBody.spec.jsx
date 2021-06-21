/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import WeaponsTableBody from './component';

import { firearms } from '../../data/firearms';

// mptodo - this file seems to have a few repeated tests that are in WeaponsCard intergration tests...
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

const m1911Qty2 = {
  ...m1911Qty1,
  qty: 2,
};

const m1911WithSpareMag = {
  ...m1911Qty1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 1 }],
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

  it('should be possible to increase qty of firearm', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });
    wrapper.find('button[children="M1911A1"]').closest('div').find('.button--up').simulate('click');

    expect(increaseFirearmQty).toHaveBeenCalledWith(m1911Qty1.name);
  });

  it('should be possible to decrease qty of firearm', () => {
    wrapper.setProps({ firearms: [m1911Qty2] });
    wrapper.find('button[children="M1911A1"]').closest('div').find('.button--down').simulate('click');

    expect(decreaseFirearmQty).toHaveBeenCalledWith(m1911Qty2.name);
  });

  it('should not be possible to decrease qty of firearm below 1', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });
    wrapper.find('button[children="M1911A1"]').closest('div').find('.button--down').simulate('click');

    expect(increaseFirearmQty).not.toHaveBeenCalled();
  });

  it('should be possible to modify firearm', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });
    wrapper.find('button[children="M1911A1"]').simulate('click');

    expect(toggleModifyWeapon).toHaveBeenCalledWith(m1911Qty1.name);
  });

  it('should be possible to remove firearm', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });
    wrapper.find('.button--close').simulate('click');

    expect(removeFirearm).toHaveBeenCalledWith(m1911Qty1.name);
  });

  it('should be possible to increase magazine', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });
    wrapper.find('.magazineRow').find('.button--up').simulate('click');

    expect(increaseMagazineQty).toHaveBeenCalledWith({ firearmToModify: 'M1911A1', magazineIndex: 0 });
  });

  it('should be possible to decrease magazine', () => {
    wrapper.setProps({ firearms: [m1911WithSpareMag] });
    wrapper.find('.magazineRow').find('.button--down').simulate('click');

    expect(decreaseMagazineQty).toHaveBeenCalledWith({ firearmToModify: 'M1911A1', magazineIndex: 0 });
  });

  it('should not be possible to decrease magazine below 0', () => {
    wrapper.setProps({ firearms: [m1911Qty1] });
    wrapper.find('.magazineRow').find('.button--down').simulate('click');

    expect(decreaseMagazineQty).not.toHaveBeenCalled();
  });

  describe('rendering the correct information', () => {
    it('should return "Single Rounds" if type is "Rnd"', () => {
      wrapper.setProps({ firearms: [pistolSingleRounds] });

      expect(wrapper.text()).toContain('Single Round');
    });

    it('should return "Single Rounds" if type is "Rnd"', () => {
      wrapper.setProps({ firearms: [m1911Qty1] });

      expect(wrapper.text()).toContain('7 round Mag');
    });
  });
});

describe('rendering weapons', () => {
  const getProps = () => ({
    toggleModifyWeapon,
    firearms: [],
    grenades: [],
    launchers: [],
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
    increaseUnderslungLauncherAmmo,
    decreaseUnderslungLauncherAmmo,
    totalWeaponWeight: 1337,
  });

  describe('default render', () => {
    const props = getProps();

    const wrapper = shallow(<WeaponsTableBody {...props} />);

    it('should render no weapons if none provided', () => {
      expect(wrapper.find('.gear-table-row--container').exists()).toBe(false);
    });
  });

  describe('rendering firearms', () => {
    const props = getProps();
    props.firearms = [testFAMAS(), testM1911A1()];

    const wrapper = shallow(<WeaponsTableBody {...props} />);

    it('should render provided firearms', () => {
      expect(wrapper.text()).toContain('FAMAS');
      expect(wrapper.text()).toContain('M1911A1');
    });
  });

  describe('rendering grenades', () => {
    const props = getProps();
    props.grenades = [m2Grenade];

    const wrapper = shallow(<WeaponsTableBody {...props} />);

    it('should render provided grenades', () => {
      expect(wrapper.text()).toContain('M2');
    });
  });

  describe('rendering launchers', () => {
    const props = getProps();

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

    props.launchers = [m79, m72];

    const wrapper = mount(<WeaponsTableBody {...props} />);

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render provided launchers', () => {
      expect(wrapper.text()).toContain('M79');
      expect(wrapper.text()).toContain('M72');
    });
  });
});
