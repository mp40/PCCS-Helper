import React from 'react';
import { mount } from 'enzyme';
import GrenadeSelectModal from './component';

const addGrenade = jest.fn();
const toggleOffWeaponCardViews = jest.fn();

const doubleM2 = {
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

describe('GrenadeSelectModal', () => {
  const wrapper = mount(
    <GrenadeSelectModal
      addGrenade={addGrenade}
      toggleOffWeaponCardViews={toggleOffWeaponCardViews}
      grenades={[doubleM2]}
    />,
  );
  afterEach(() => {
    toggleOffWeaponCardViews.mockClear();
    addGrenade.mockClear();
  });
  it('should render a list of grenades', () => {
    expect(wrapper.text()).toContain('#36M');
  });
  it('should be possible to view grenade stats', () => {
    wrapper.find('.viewM61Stats').simulate('click');
    expect(wrapper.text()).toContain('*2h*3842082-1');
  });
  it('should be possible to select a greande', () => {
    wrapper.find('.selectM61').simulate('click');
    expect(addGrenade).toHaveBeenCalledWith('M61');
  });
  it('should close the modal when a grenade is selected', () => {
    wrapper.find('.selectM61').simulate('click');
    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showGrenades');
  });
  it('should have a back button', () => {
    wrapper.find('.close').simulate('click');
    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showGrenades');
  });
  it('should not be possible to select the same grenade twice', () => {
    wrapper.find('.selectM2').simulate('click');
    expect(addGrenade).not.toHaveBeenCalled();
    expect(toggleOffWeaponCardViews).not.toHaveBeenCalled();
  });
});
