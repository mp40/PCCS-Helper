import React from 'react';
import { mount } from 'enzyme';
import GrenadeSelectModal from './component';

const addGrenade = jest.fn();
const toggleOffWeaponCardViews = jest.fn();

const dataM61Grenade = {
  name: 'M61',
  qty: 1,
  l: 3.8,
  w: 1,
  at: 3,
  fl: 2,
  r: 15,
  data: {
    pen: [3.4, 2.4, 2.2, 1.8, 1.5, '1.0', 0.4],
    dc: [10, 2, 2, 2, 2, 1, 1],
    bshc: ['*2h', '*3', 84, 20, 8, 2, -1],
    bc: ['13k', 704, 176, 52, 27, 12, 4],
  },
};

const doubleM2 = { name: 'M2' };

describe('GrenadeSelectModal', () => {
  const wrapper = mount(
    // eslint-disable-next-line react/jsx-filename-extension
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
    expect(addGrenade).toHaveBeenCalledWith(dataM61Grenade);
  });
  it('should close the modal when a grenade is selected', () => {
    wrapper.find('.selectM61').simulate('click');
    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showGrenades');
  });
  it('should have a back button', () => {
    wrapper.find('.closeModal').simulate('click');
    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showGrenades');
  });
  it('should not be possible to select the same grenade twice', () => {
    wrapper.find('.selectM2').simulate('click');
    expect(addGrenade).not.toHaveBeenCalled();
    expect(toggleOffWeaponCardViews).not.toHaveBeenCalled();
  });
});
