import React from 'react';
import { mount } from 'enzyme';
import Magazines from './index';

import { testM16 } from '../../../helpers/testHelpers';

describe('<Magazines> buttons', () => {
  const gunObj = testM16();
  const setPrimaryMag = jest.fn();
  const handleMagazineExistence = jest.fn();
  const wrapper = mount(
    <Magazines
      gunObj={gunObj}
      setPrimaryMag={setPrimaryMag}
      handleMagazineExistence={handleMagazineExistence}
    />);
  it('should call setPrimaryMag method', () => {
    wrapper.find('.M16MagAtIndex1').find('.selectPrimaryButton').simulate('click');
    expect(setPrimaryMag).toHaveBeenCalledWith(1, undefined);
  });
  it('should call handleMagazineExistence method', () => {
    wrapper.find('.M16MagAtIndex1').find('.removeMagazineButton').simulate('click');
    expect(handleMagazineExistence).toHaveBeenCalledWith({ firearm: 'M16', magazine: { cap: 30, qty: 0, type: 'Mag', weight: 1 } });
  });
});
