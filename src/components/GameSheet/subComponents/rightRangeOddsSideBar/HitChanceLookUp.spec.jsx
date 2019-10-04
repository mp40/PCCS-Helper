import React from 'react';
import { shallow } from 'enzyme';

import HitChanceLookUp from './HitChanceLookUp';

describe('odds of hitting table reference', () => {
  const wrapper = shallow(<HitChanceLookUp />);
  it('should render the EAL in order', () => {
    expect(wrapper.childAt(1).text()).toContain('28');
    expect(wrapper.childAt(2).text()).toContain('27');
    expect(wrapper.childAt(3).text()).toContain('26');
    expect(wrapper.childAt(11).text()).toContain('18');
    expect(wrapper.childAt(16).text()).toContain('13');
  });
  it('should render odds of hitting the EAL', () => {
    expect(wrapper.childAt(1).text()).toContain('9999');
    expect(wrapper.childAt(2).text()).toContain('9898');
    expect(wrapper.childAt(3).text()).toContain('9698');
    expect(wrapper.childAt(11).text()).toContain('5373');
    expect(wrapper.childAt(16).text()).toContain('2247');
  });
});
