import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import WeaponsModalSelection, { filterCalibersFromType } from './index';
import { mgs } from '../../data/firearms';

const waitOneTick = simulate => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
}));

const waitOneSec = simulate => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 1001);
}));

describe('promise to wait for transition close', () => {
  const wrapper = mount(<WeaponsModalSelection firearmsArray={mgs()} />);
  describe('firearm filter card transitions', () => {
    it('should have a filter card with default class name', () => {
      expect(wrapper.find('.filterCardWrapper').exists()).toEqual(true);
      expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(false);
    });
    it('should apply transition to filter card', async () => {
      await act(async () => {
        await waitOneTick(wrapper.find('#showFirearmFilters').simulate('click'));
      });
      wrapper.update();
      expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(true);
      expect(wrapper.find('.filterCardWrapper').hasClass('final')).toEqual(false);
    });
    it('should apply the final class after one second', async () => {
      await act(async () => {
        await waitOneSec();
      });
      wrapper.update();
      expect(wrapper.find('.filterCardWrapper').hasClass('final')).toEqual(true);
    });
    it('should be possible to reverse filter card transition', async () => {
      await act(async () => {
        await waitOneTick(wrapper.find('#showFirearmFilters').simulate('click'));
      });
      wrapper.update();
      expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(false);
    });
  });

  describe('weapon stat card transitions', () => {
    it('should not be rendered by default', () => {
      expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(false);
    });
    it('should render the card in pre-transition location then apply transition', async () => {
      expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(false);
      await act(async () => {
        await waitOneTick(wrapper.find('#viewM60').simulate('click'));
      });
      wrapper.update();
      expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(true);
    });
    it('should reverse transtion before closing card', async () => {
      expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(true);
      await act(async () => {
        await waitOneTick(wrapper.find('#closeGunStatView').simulate('click'));
      });
      wrapper.update();
      expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(false);
      expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(true);
    });
  });
});

// todo this will pass tests even if args in handleSetFilterByType are in wrong order.
// todo mqke sure some tests fail if args in wrong order
describe('filtering types and calibers helper function', () => {
  const firearmArrayDouble = () => [
    { name: 'AK47', calibre: '7.62 x 39mm' },
    { name: 'AK 74', calibre: '5.45 x 39.5mm' },
    { name: 'M16', calibre: '5.56mm NATO' },
    { name: 'M60', calibre: '7.62mm NATO' },
    { name: 'MAT 49', calibre: '9mm Parabellum' },
    { name: 'fakeCaliberGun', calibre: 'Xmm Nothing' },
  ];
  it('should return an array with all calibers', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), 'All');
    expect(returnedArray.length).toBe(firearmArrayDouble().length);
  });
  it('should return an array with only 7.62 x 39mm chambered weapons', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), '7.62 x 39mm');
    expect(returnedArray.length).toBe(1);
    expect(returnedArray[0].name).toBe('AK47');
  });
  it('should return an array with only 5.45 x 39.5mm chambered weapons', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), '5.45 x 39.5mm');
    expect(returnedArray.length).toBe(1);
    expect(returnedArray[0].name).toBe('AK 74');
  });
  it('should return an array with only 5.56mm NATO chambered weapons', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), '5.56mm NATO');
    expect(returnedArray.length).toBe(1);
    expect(returnedArray[0].name).toBe('M16');
  });
  it('should return an array with only 7.62mm NATO chambered weapons', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), '7.62mm NATO');
    expect(returnedArray.length).toBe(1);
    expect(returnedArray[0].name).toBe('M60');
  });
  it('should return an array with only 9mm Parabellum chambered weapons', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), '9mm Parabellum');
    expect(returnedArray.length).toBe(1);
    expect(returnedArray[0].name).toBe('MAT 49');
  });
  it('should return an array with weapons with calibers not on list', () => {
    const returnedArray = filterCalibersFromType(firearmArrayDouble(), 'Other');
    expect(returnedArray.length).toBe(1);
    expect(returnedArray[0].name).toBe('fakeCaliberGun');
  });
});

describe('Weapon Notes', () => {
  it('should not render for shotguns', () => {
    const wrapper = shallow(<WeaponsModalSelection />);
    wrapper.find('#viewRemingtonM870').simulate('click');
    expect(wrapper.find('FirearmNotes').exists()).toBe(false);
  });
  it('should render for other firearms', () => {
    const wrapper = shallow(<WeaponsModalSelection />);
    wrapper.find('#viewM60').simulate('click');
    expect(wrapper.find('FirearmNotes').exists()).toBe(true);
  });
});
