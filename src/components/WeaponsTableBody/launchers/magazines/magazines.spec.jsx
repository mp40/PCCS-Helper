import React from 'react';
import { shallow } from 'enzyme';

import Magazines from '.';

const increaseLauncherAmmo = jest.fn();
const decreaseLauncherAmmo = jest.fn();

describe('Selected Launchers Magazines', () => {
  const getWrapperWithMagazines = (magazines) => shallow(
    <Magazines
      launcherName="Mock launcher"
      magazines={magazines}
      increaseLauncherAmmo={increaseLauncherAmmo}
      decreaseLauncherAmmo={decreaseLauncherAmmo}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not decrease ammo less than zero', () => {
    const wrapper = getWrapperWithMagazines([{ type: 'Rnd', class: 'HEAT', weight: 5.0, cap: 1, qty: 0 }]);

    wrapper.find('MagazineRow').invoke('decreaseItem')();

    expect(decreaseLauncherAmmo).not.toHaveBeenCalled();
  });

  it('should not render ammo of single use launchers', () => {
    const wrapper = getWrapperWithMagazines([{ type: '', weight: '-', cap: 1 }]);

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
