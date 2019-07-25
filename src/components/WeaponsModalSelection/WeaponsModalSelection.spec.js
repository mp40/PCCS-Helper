import React from 'react';
import { mount } from 'enzyme';
import WeaponsModalSelection from './index';
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
