import React from 'react';
import { shallow } from 'enzyme';

import Optics from './component';

describe('Modify Firearm Optics', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Optics />);
  });

  it('should be possible to open modal to select optic', () => {
    wrapper.find('button[children="Update Optic"]').simulate('click');

    expect(wrapper.text()).toContain('Select Optic');
  });

  it('should be possible to remove optic', () => {
    wrapper.find('button[children="Remove Optic"]').simulate('click');
  });
});
