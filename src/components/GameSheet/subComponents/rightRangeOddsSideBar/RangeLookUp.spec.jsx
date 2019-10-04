import React from 'react';
import { shallow } from 'enzyme';

import RangeLookUp from './RangeLookUp';

describe('range table reference', () => {
  const wrapper = shallow(<RangeLookUp />);
  it('should render the range in order', () => {
    expect(wrapper.childAt(1).text()).toContain('1');
    expect(wrapper.childAt(2).text()).toContain('2');
    expect(wrapper.childAt(3).text()).toContain('3');
    expect(wrapper.childAt(11).text()).toContain('12');
    expect(wrapper.childAt(16).text()).toContain('25');
  });
  it('should render the ALM for the range', () => {
    expect(wrapper.childAt(1).text()).toContain('33');
    expect(wrapper.childAt(2).text()).toContain('28');
    expect(wrapper.childAt(3).text()).toContain('25');
    expect(wrapper.childAt(11).text()).toContain('15');
    expect(wrapper.childAt(16).text()).toContain('10');
  });
});
