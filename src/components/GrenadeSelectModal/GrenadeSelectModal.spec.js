import React from 'react';
import { mount } from 'enzyme';
import GrenadeSelectModal from './index';

describe('GrenadeSelectModal', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = mount(<GrenadeSelectModal />);
  it('should render a list of grenades', () => {
    expect(wrapper.text()).toContain('#36M');
  });
  it('should be possible to view grenade stats', () => {
    wrapper.find('.viewM61Stats').simulate('click');
    expect(wrapper.text()).toContain('*2h*3842082-1');
  });
  it('should be possible to select a greande', () => {
    wrapper.find('.selectM61').simulate('click');
    expect(handleSelection).toHaveBeenCalled();
  });
});
