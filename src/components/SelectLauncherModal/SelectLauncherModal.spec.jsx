import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectLauncherModal from './index';

describe('the select grenade/rocket launcher modal', () => {
  const wrapper = shallow(<SelectLauncherModal />);
  it('should display list of weapons', () => {
    expect(wrapper.text()).toContain('M79');
  });
  it('should be possible to see launcher stats', () => {
     console.log(wrapper.debug())
  })
});
