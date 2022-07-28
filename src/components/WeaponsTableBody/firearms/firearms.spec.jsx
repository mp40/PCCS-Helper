import React from 'react';
import { shallow } from 'enzyme';
import Firearms from './component';

import { firearms as firearmData } from '../../../data/firearms';

const testFAMAS = () => ({ ...firearmData.FAMAS });
const testM1911A1 = () => ({ ...firearmData.M1911A1 });

const increaseFirearmQty = jest.fn();
const decreaseFirearmQty = jest.fn();
const removeFirearm = jest.fn();
const increaseMagazineQty = jest.fn();
const decreaseMagazineQty = jest.fn();
const increaseUnderslungLauncherAmmo = jest.fn();
const decreaseUnderslungLauncherAmmo = jest.fn();

describe('Selected Firearms', () => {
  const getWrapperWithFirearms = (firearms) => shallow(
    <Firearms
      firearms={firearms}
      removeFirearm={removeFirearm}
      increaseFirearmQty={increaseFirearmQty}
      decreaseFirearmQty={decreaseFirearmQty}
      increaseMagazineQty={increaseMagazineQty}
      decreaseMagazineQty={decreaseMagazineQty}
      increaseUnderslungLauncherAmmo={increaseUnderslungLauncherAmmo}
      decreaseUnderslungLauncherAmmo={decreaseUnderslungLauncherAmmo}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render provided firearms', () => {
    const wrapper = getWrapperWithFirearms([testFAMAS(), testM1911A1()]);

    expect(wrapper.find('FirearmRow').at(0).props().text).toBe('FAMAS');
    expect(wrapper.find('FirearmRow').at(1).props().text).toBe('M1911A1');
  });

  it('should not decrease firearm less than one', () => {
    const wrapper = getWrapperWithFirearms([testFAMAS()]);

    wrapper.find('FirearmRow').invoke('decreaseItem')();

    expect(decreaseFirearmQty).not.toHaveBeenCalled();
  });
});
