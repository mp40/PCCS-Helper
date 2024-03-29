import React from 'react';
import { shallow } from 'enzyme';

import CharacterGrenades, { aim } from './index';

jest.mock('../../../../data/grenades', () => ({
  __esModule: true,
  grenadeList: {
    M2: {
      name: 'M2',
      at: 3,
      fl: 2,
    },
    'The Holy Hand Grenade Of Antioch': {
      name: 'The Holy Hand Grenade Of Antioch',
      at: 1,
      fl: 5,
    },
  },
}));

const mockGrenade = { name: 'The Holy Hand Grenade Of Antioch', qty: 1 };

const mockSetGrenade = { ...mockGrenade, list: 'grenades', at: 1, fl: 5, aim };

describe('Loaded Character Reference Card', () => {
  const setWeapon = jest.fn();

  it('should render characters grenades', () => {
    const wrapper = shallow(<CharacterGrenades grenades={[mockGrenade]} setWeapon={setWeapon} />,
    );

    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
  });

  it('should not render if no grenades', () => {
    const wrapper = shallow(<CharacterGrenades grenades={[]} setWeapon={setWeapon} />);

    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should set grenade to use with list key when grenade button clicked', () => {
    const wrapper = shallow(<CharacterGrenades grenades={[mockGrenade]} setWeapon={setWeapon} />);

    wrapper.find('button').simulate('click');

    expect(setWeapon).toHaveBeenCalledWith(mockSetGrenade);
  });
});
