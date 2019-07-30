import React from 'react';
import { mount } from 'enzyme';
import BodyArmourCard, { selectArmourList } from './index';

import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';

describe('the BodyArmourCard', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = mount(<BodyArmourCard />);
  it('should have a default of no boday armour', () => {
    expect(wrapper.find('.helmetBodyArmour').childAt(0).text()).toBe('No Helmet');
    expect(wrapper.find('.helmetBodyArmour').childAt(1).text()).toBe('0');
    expect(wrapper.find('.vestBodyArmour').childAt(0).text()).toBe('No Vest');
    expect(wrapper.find('.vestBodyArmour').childAt(1).text()).toBe('0');
  });
  it('should be possible to open helmet selection', () => {
    wrapper.find('.helmetBodyArmour').simulate('click');
    expect(wrapper.find('.selectBodyArmourModal').exists()).toBe(true);
    expect(wrapper.find('.bodyArmourListHeading').text()).toBe('Select Helmet');
  });
  it('should be render helmet stats', () => {
    const m1Stats = wrapper.find('.M1Row');
    expect(m1Stats.childAt(0).text()).toBe('M1');
    expect(m1Stats.childAt(1).text()).toBe('4');
    expect(m1Stats.childAt(2).text()).toBe('4');
    expect(m1Stats.childAt(3).text()).toBe('I');
    expect(m1Stats.childAt(4).text()).toBe('2.5');
    expect(m1Stats.childAt(5).text()).toBe('USA, WW2, Cold War');
  });
  it('should be possible to select a helmet', () => {
    expect(wrapper.find('.M1Row')).simulate('click');
    // todo
  });
  // maybe this is too coupled and not needed
//   describe('helper functions', () => {
//     it('should select the correct body armour list', () => {
//       expect(selectArmourList('Helmet').length).toBe(helmetStats().length);
//       expect(selectArmourList('Vest').length).toBe(bodyArmorStats().length);
//     });
//   });
});
