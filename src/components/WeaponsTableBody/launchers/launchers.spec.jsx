import React from 'react';
import { shallow } from 'enzyme';

import Launchers from './component';

const increaseLauncherQty = jest.fn();
const decreaseLauncherQty = jest.fn();
const removeLauncher = jest.fn();
const increaseLauncherAmmo = jest.fn();
const decreaseLauncherAmmo = jest.fn();

describe('Selected Launchers', () => {
  const getWrapperWithLaunchers = (launchers) => shallow(
    <Launchers
      launchers={launchers}
      increaseLauncherQty={increaseLauncherQty}
      decreaseLauncherQty={decreaseLauncherQty}
      removeLauncher={removeLauncher}
      increaseLauncherAmmo={increaseLauncherAmmo}
      decreaseLauncherAmmo={decreaseLauncherAmmo}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not decrease launcher less than one', () => {
    const wrapper = getWrapperWithLaunchers([{ name: 'RPG 18', qty: 1, mag: [] }]);

    wrapper.find('LauncherRow').invoke('decreaseItem')();

    expect(decreaseLauncherQty).not.toHaveBeenCalled();
  });
});
