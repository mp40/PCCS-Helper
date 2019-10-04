import React from 'react';
import { shallow } from 'enzyme';

import KnockoutTable from './index';

describe('The Knockout Table', () => {
  const wrapper = shallow(<KnockoutTable knockoutValue={10} />);
  beforeEach(() => {
    wrapper.setProps({ knockoutValue: 10 });
  });
  it('show incapacitation chance for damage less than 1/10th of knockout value', () => {
    expect(wrapper.text()).toContain('< 1');
    wrapper.setProps({ knockoutValue: 20 });
    expect(wrapper.text()).toContain('< 2');
    wrapper.setProps({ knockoutValue: 3 });
    expect(wrapper.text()).toContain('< 0.3');
  });
  it('show incapacitation chance for damage over 1/10th of knockout value', () => {
    expect(wrapper.text()).toContain('> 1');
    wrapper.setProps({ knockoutValue: 20 });
    expect(wrapper.text()).toContain('> 2');
    wrapper.setProps({ knockoutValue: 3 });
    expect(wrapper.text()).toContain('> 0.3');
  });
  it('show incapacitation chance for damage over knockout value', () => {
    expect(wrapper.text()).toContain('> 10');
    wrapper.setProps({ knockoutValue: 20 });
    expect(wrapper.text()).toContain('> 20');
    wrapper.setProps({ knockoutValue: 3 });
    expect(wrapper.text()).toContain('> 3');
  });
  it('show incapacitation chance for damage over 2 x knockout value', () => {
    expect(wrapper.text()).toContain('> 20');
    wrapper.setProps({ knockoutValue: 20 });
    expect(wrapper.text()).toContain('> 40');
    wrapper.setProps({ knockoutValue: 3 });
    expect(wrapper.text()).toContain('> 6');
  });
  it('show incapacitation chance for damage over 3 x knockout value', () => {
    expect(wrapper.text()).toContain('> 30');
    wrapper.setProps({ knockoutValue: 20 });
    expect(wrapper.text()).toContain('> 60');
    wrapper.setProps({ knockoutValue: 3 });
    expect(wrapper.text()).toContain('> 9');
  });
});
