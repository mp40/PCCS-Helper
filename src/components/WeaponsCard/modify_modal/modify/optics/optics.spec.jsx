import React from 'react';
import { shallow } from 'enzyme';

import Optics from './component';

describe('Modify Firearm Optics', () => {
  let wrapper;

  const firearm = 'M16';
  const optics = null;
  const updateOptic = jest.fn();
  const removeOptic = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Optics firearm={firearm} optics={optics} updateOptic={updateOptic} removeOptic={removeOptic} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show optic data if optic attached', () => {
    wrapper.setProps({ optics: { attached: 'M73' } });

    expect(wrapper.text()).toContain('M73');
    expect(wrapper.text()).toContain('FOV');
  });

  it('should not show optic data if no optic attached', () => {
    expect(wrapper.text()).not.toContain('FOV');
  });

  it('should be possible to open modal to select optic', () => {
    wrapper.find('button[children="Update Optic"]').simulate('click');

    expect(wrapper.text()).toContain('Select Optic');
  });

  it('should only show the restricted scopes if the weapon has scope restrictions', () => {
    wrapper.setProps({ optics: { restrictedTo: ['M73', 'mock optic'] } });

    wrapper.find('button[children="Update Optic"]').simulate('click');

    expect(wrapper.find('.opticModal').text()).toContain('M73');
    expect(wrapper.find('.opticModal').text()).toContain('mock optic');

    expect(wrapper.find('.opticModal').text()).not.toContain('Low Power Scope');
    expect(wrapper.find('.opticModal').text()).not.toContain('Medium Power Scope');
    expect(wrapper.find('.opticModal').text()).not.toContain('High Power Scope');
    expect(wrapper.find('.opticModal').text()).not.toContain('AAS');
  });

  it('should add additional scopes if the weapon is compatible', () => {
    wrapper.setProps({ optics: { ableToAttach: ['M73', 'mock optic'] } });

    wrapper.find('button[children="Update Optic"]').simulate('click');

    expect(wrapper.find('.opticModal').text()).toContain('M73');
    expect(wrapper.find('.opticModal').text()).toContain('mock optic');

    expect(wrapper.find('.opticModal').text()).toContain('Low Power Scope');
    expect(wrapper.find('.opticModal').text()).toContain('Medium Power Scope');
    expect(wrapper.find('.opticModal').text()).toContain('High Power Scope');
    expect(wrapper.find('.opticModal').text()).toContain('AAS');
  });

  it('should be possible to select optic', () => {
    wrapper.find('button[children="Update Optic"]').simulate('click');

    wrapper.find('button[children="AAS"]').simulate('click');

    const expectedActionPayload = { firearmToUpdate: 'M16', optic: 'AAS' };

    expect(updateOptic).toHaveBeenCalledWith(expectedActionPayload);
  });

  it('should close modal after selecting optic', () => {
    wrapper.find('button[children="Update Optic"]').simulate('click');

    wrapper.find('button[children="AAS"]').simulate('click');

    expect(wrapper.text()).not.toContain('Select Optic');
  });

  it('should be possible to remove optic', () => {
    wrapper.find('button[children="Remove Optic"]').simulate('click');

    expect(removeOptic).toHaveBeenCalledWith('M16');
  });
});
