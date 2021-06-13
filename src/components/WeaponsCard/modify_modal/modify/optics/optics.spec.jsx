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

  it('should be possible to open modal to select optic', () => {
    wrapper.find('button[children="Update Optic"]').simulate('click');

    expect(wrapper.text()).toContain('Select Optic');
  });

  it('should be possible to remove optic', () => {
    wrapper.find('button[children="Remove Optic"]').simulate('click');

    expect(removeOptic).toHaveBeenCalledWith('M16');
  });
});
