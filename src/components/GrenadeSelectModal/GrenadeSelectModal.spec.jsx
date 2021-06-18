import React from 'react';
import { shallow } from 'enzyme';
import GrenadeSelectModal from './component';

const addGrenade = jest.fn();
const toggleOffWeaponCardViews = jest.fn();

const doubleM2 = {
  name: 'M2',
  qty: 1,
};

describe('GrenadeSelectModal', () => {
  const wrapper = shallow(
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
    wrapper.find('span[children="M61"]').closest('.row').find('.button--question').simulate('click');

    expect(wrapper.find('GrenadeData').props().grenade.name).toBe('M61');
  });

  it('should be possible to select a greande', () => {
    wrapper.find('span[children="M61"]').closest('div').simulate('click');

    expect(addGrenade).toHaveBeenCalledWith('M61');
  });

  it('should close the modal when a grenade is selected', () => {
    wrapper.find('span[children="M61"]').closest('div').simulate('click');

    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showGrenades');
  });

  it('should have a back button', () => {
    wrapper.find('.close').simulate('click');

    expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showGrenades');
  });

  it('should not be possible to select the same grenade twice', () => {
    wrapper.find('span[children="M2"]').closest('div').simulate('click');

    expect(addGrenade).not.toHaveBeenCalled();
    expect(toggleOffWeaponCardViews).not.toHaveBeenCalled();
  });
});
