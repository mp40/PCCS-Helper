import React from 'react';
import { mount } from 'enzyme';

import Magazines from './index';

import { firearms } from '../../../../data/firearms';

const testM16 = () => ({ ...firearms.M16 });

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

  it('should render details of magazines', () => {
    expect(wrapper.text()).toContain('Mag301');
    expect(wrapper.text()).toContain('Mag200.7');
  });

  it('should set primary magazine', () => {
    wrapper.find('.magazine').at(1).find('.selectPrimaryButton').simulate('click');

    expect(setPrimaryMag).toHaveBeenCalledWith(1, undefined);
  });

  it('should remove magazine', () => {
    wrapper.find('.magazine').at(1).find('.removeMagazineButton').simulate('click');

    expect(handleMagazineExistence).toHaveBeenCalledWith({ firearmToUpdate: 'M16', magazineIndex: 1 }, undefined);
  });

  it('should not render 40mm grenade ammo', () => {
    expect(wrapper.find('.magazine').length).toBe(2);
  });
});
