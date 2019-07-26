import React from 'react';
import { mount } from 'enzyme';
import WeaponsModalSelection, { filterCalibersFromType } from './index';

import { mgs } from '../../data/firearms';

const waitOneTick = () => new Promise(((resolve) => {
  setTimeout(() => {
    resolve();
  }, 0);
}));


describe('promise to wait for transition close', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = mount(<WeaponsModalSelection firearmsArray={mgs()} />);
  describe('firearm filter card transitions', () => {
    it('should have a filter card with default class name', () => {
      expect(wrapper.find('.filterCardWrapper').exists()).toEqual(true);
      expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(false);
    });
    it('should be apply transition to filter card', async () => {
      wrapper.find('#showFirearmFilters').simulate('click');
      await waitOneTick();
      expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(true);
    });
    it('should be possible to reverse filter card transition', async () => {
      wrapper.find('#showFirearmFilters').simulate('click');
      await waitOneTick();
      expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(false);
    });
  });
  describe('weapon stat card transitions', () => {
    it('should not be rendered by default', () => {
      expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(false);
    });
    it('should render the card in pre-transition location then apply transition', (done) => {
      // this test throws warning that I should be using act(...)
      // have tried multiple ways to use this not no avail
      // however there seems to be a lot of people only line complaining it is broken
      // the below works, but still throws warnings
      // ignoring these warnings for now
      wrapper.find('#viewM60').simulate('click');
      expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(true);
      expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(false);
      setTimeout(() => {
        wrapper.update();
        expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(true);
        done();
      }, 0);
    });
    it('should reverse transtion before closing card', async (done) => {
      expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(true);
      wrapper.find('#closeGunStatView').simulate('click');
      await waitOneTick();
      expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(false);
      expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(true);
      setTimeout(() => {
        wrapper.update();
        expect(wrapper.find('#closeGunStatView').exists()).toEqual(false);
        done();
      }, 1000);
    });
  });
});

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
