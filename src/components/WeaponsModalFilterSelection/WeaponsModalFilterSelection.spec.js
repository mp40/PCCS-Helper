import React from 'react';
import { mount, shallow } from 'enzyme';
import WeaponsModalFilterSelection from './index';

describe('filter weapons by type modal', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<WeaponsModalFilterSelection />);
  const setSpy = () => jest.spyOn(wrapper.instance(), 'handleUpdateFilter');
  it('should select rifle when appropraite button clicked', () => {
    const spyOnMethod = setSpy();
    wrapper.find('.selectRifleFilter').simulate('change', { target: { checked: true } });
    expect(spyOnMethod).toHaveBeenCalled();
  });
});
