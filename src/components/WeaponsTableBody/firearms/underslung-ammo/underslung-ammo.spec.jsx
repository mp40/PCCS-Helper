import React from 'react';
import { shallow } from 'enzyme';

import UnderslugAmmo from '.';

const increaseUnderslungLauncherAmmo = jest.fn();
const decreaseUnderslungLauncherAmmo = jest.fn();

describe('Selected Firearm Magazines', () => {
  const getWrapperWithMagazines = (magazines) => shallow(
    <UnderslugAmmo
      firearmName="Mock Firearm"
      attached="M203"
      magazines={magazines}
      increaseUnderslungLauncherAmmo={increaseUnderslungLauncherAmmo}
      decreaseUnderslungLauncherAmmo={decreaseUnderslungLauncherAmmo}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not decrease magazine less than zero', () => {
    const wrapper = getWrapperWithMagazines([{ type: 'Rnd', class: 'HEAT', weight: 0.51, cap: 1, qty: 0 }]);

    wrapper.find('MagazineRow').invoke('decreaseItem')();

    expect(decreaseUnderslungLauncherAmmo).not.toHaveBeenCalled();
  });
});
