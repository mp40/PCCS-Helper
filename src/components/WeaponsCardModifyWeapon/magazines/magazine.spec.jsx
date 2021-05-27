import React from 'react';
import { mount } from 'enzyme';
import Magazines from './index';

import { testM203 } from '../../../helpers/testHelpers';

describe('<Magazines> buttons', () => {
  const gunObj = testM203();
  const setPrimaryMag = jest.fn();
  const handleMagazineExistence = jest.fn();
  const wrapper = mount(
    <Magazines
      gunObj={gunObj}
      setPrimaryMag={setPrimaryMag}
      handleMagazineExistence={handleMagazineExistence}
    />);
  it('should call setPrimaryMag method', () => {
    wrapper.find('.M203MagAtIndex1').find('.selectPrimaryButton').simulate('click');
    expect(setPrimaryMag).toHaveBeenCalledWith(1, undefined);
  });
  it('should call handleMagazineExistence method', () => {
    wrapper.find('.M203MagAtIndex1').find('.removeMagazineButton').simulate('click');
    expect(handleMagazineExistence).toHaveBeenCalledWith({ firearm: 'M203', magazine: { cap: 20, qty: 0, type: 'Mag', weight: 0.7 } });
  });
  it('should not render 40mm grenade ammo', () => {
    expect(wrapper.find('.magazineDetailsBody').length).toBe(2);
  });
});