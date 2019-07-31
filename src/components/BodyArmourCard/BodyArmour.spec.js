import React from 'react';
import { mount } from 'enzyme';
import BodyArmourCard, { selectArmourList } from './component';

import { helmetStats, bodyArmorStats } from '../../data/uniformAndArmourTypes';

const helmetM1 = {
  name: 'M1',
  pf: 4,
  bpf: 4,
  ac: 'i',
  weight: 2.5,
  tags: ['USA', 'WW2', 'Cold War'],
};

describe('the BodyArmourCard', () => {
  const mockHelmetDispatch = jest.fn();
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = mount(<BodyArmourCard changeHelmet={mockHelmetDispatch} />);
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
    wrapper.find('.M1Row').simulate('click');
    expect(mockHelmetDispatch).toHaveBeenCalledWith(helmetM1);
  });
  it('should close the modal on selection', () => {
    expect(wrapper.find('.selectBodyArmourModal').exists()).toBe(false);
  });
});

// import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

// describe('Character Attribute Stat Input', () => {
//   const wrapper = mountAppWithStore(storeWithCreateCharacterView());
