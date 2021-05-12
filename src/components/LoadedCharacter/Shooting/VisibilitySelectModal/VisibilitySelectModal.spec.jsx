import React from 'react';
import { shallow } from 'enzyme';

import VisibilitySelectModal from './index';

describe('Visibility Select Modal', () => {
  let wrapper;
  const setModal = jest.fn();
  const setVisibility = jest.fn();
  const visibility = {
    lighting: 'Good',
    muzzleFlash: false,
    smokeFogHaze: false,
    lookingIntoLight: false,
    opticalUnder8: false,
    opticsBroken: false,
    aasBroken: false,
    sightsBroken: false,
    teargasNoMask: false,
    notLooking: false,
  };

  beforeEach(() => {
    wrapper = shallow(
      <VisibilitySelectModal
        setModal={setModal}
        setVisibility={setVisibility}
        visibility={visibility}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show current lighting', () => {
    expect(wrapper.find('button[children="Good"]').props().className).toBe('selected');
  });

  it('should be possible to change lighting', () => {
    wrapper.find('button[children="Dusk"]').simulate('click');

    const updatedVisibility = { ...visibility };
    updatedVisibility.lighting = 'Dusk';

    expect(setVisibility).toHaveBeenCalledWith(updatedVisibility);
  });

  it('should be possible to select Other visibility penality', () => {
    const checkBox = wrapper.find('span[children="Shooter Not Looking"]')
      .closest('div').find('CheckBox');

    checkBox.simulate('click');

    const updatedVisibility = { ...visibility };
    updatedVisibility.notLooking = !updatedVisibility.notLooking;

    expect(setVisibility).toHaveBeenCalledWith(updatedVisibility);
  });

  it('should show previously selected selected options with as selected', () => {
    const preCheckedVisibility = { ...visibility };
    preCheckedVisibility.lookingIntoLight = true;

    wrapper = shallow(
      <VisibilitySelectModal
        setModal={setModal}
        setVisibility={setVisibility}
        visibility={preCheckedVisibility}
      />);

    const checkBox = wrapper.find('span[children="Looking into Light"]')
      .closest('div').find('CheckBox');

    expect(checkBox.props().isActive).toBe(true);
  });

  it('should close the modal when Done button clicked', () => {
    wrapper.find('button[children="Done"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
