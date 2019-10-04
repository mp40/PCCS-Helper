import React from 'react';
import { mount } from 'enzyme';
import BodyArmourCard from './component';
import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

const helmetM1 = {
  name: 'M1',
  pf: 4,
  bpf: 4,
  ac: 'i',
  weight: 2.5,
  tags: ['USA', 'WW2', 'Cold War'],
};

const vestM69 = {
  name: 'M69',
  pf: 5,
  bpf: 2,
  ac: 'i',
  weight: 8.5,
  tags: ['USA', 'Cold War'],
};

describe('the BodyArmourCard', () => {
  const mockHelmetDispatch = jest.fn();
  const mockVestDispatch = jest.fn();
  const wrapper = mount(<BodyArmourCard
    changeHelmet={mockHelmetDispatch}
    changeVest={mockVestDispatch}
  />);
  it('should have a default of no body armour', () => {
    expect(wrapper.find('.helmetBodyArmour').childAt(0).text()).toBe('No Helmet');
    expect(wrapper.find('.helmetBodyArmour').childAt(1).text()).toBe('0');
    expect(wrapper.find('.vestBodyArmour').childAt(0).text()).toBe('No Vest');
    expect(wrapper.find('.vestBodyArmour').childAt(1).text()).toBe('0');
  });
  describe('helmets', () => {
    it('should be possible to open helmet selection', () => {
      wrapper.find('.helmetBodyArmour').simulate('click');
      expect(wrapper.find('.selectBodyArmourModal').exists()).toBe(true);
      expect(wrapper.find('.bodyArmourListHeading').text()).toContain('Select Helmet');
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
    it('should be possible to remove helmet', () => {
      wrapper.find('.helmetBodyArmour').simulate('click');
      wrapper.find('.removeBodyArmour').simulate('click');
      expect(mockHelmetDispatch).toHaveBeenCalledWith(null);
    });
  });
  describe('vests', () => {
    it('should be possible to open vest selection', () => {
      wrapper.find('.vestBodyArmour').simulate('click');
      expect(wrapper.find('.selectBodyArmourModal').exists()).toBe(true);
      expect(wrapper.find('.bodyArmourListHeading').text()).toContain('Select Vest');
    });
    it('should be render vest stats', () => {
      const m69Stats = wrapper.find('.M69Row');
      expect(m69Stats.childAt(0).text()).toBe('M69');
      expect(m69Stats.childAt(1).text()).toBe('5');
      expect(m69Stats.childAt(2).text()).toBe('2');
      expect(m69Stats.childAt(3).text()).toBe('I');
      expect(m69Stats.childAt(4).text()).toBe('8.5');
      expect(m69Stats.childAt(5).text()).toBe('USA, Cold War');
    });
    it('should be possible to select a vest', () => {
      wrapper.find('.M69Row').simulate('click');
      expect(mockVestDispatch).toHaveBeenCalledWith(vestM69);
    });
    it('should close the modal on selection', () => {
      expect(wrapper.find('.selectBodyArmourModal').exists()).toBe(false);
    });
    it('should be possible to remove vest', () => {
      wrapper.find('.vestBodyArmour').simulate('click');
      wrapper.find('.removeBodyArmour').simulate('click');
      expect(mockVestDispatch).toHaveBeenCalledWith(null);
    });
    it('should be exit without making a slection', () => {
      wrapper.find('.vestBodyArmour').simulate('click');
      wrapper.find('.exitBodyArmourSlection').simulate('click');
      expect(wrapper.find('.selectBodyArmourModal').exists()).toBe(false);
    });
  });
  describe('body armour intergration', () => {
    const wrap = mountAppWithStore(storeWithCreateCharacterView());
    const gunActionsTable = wrap.find('#gunActionTable');
    const handActionsTable = wrap.find('#handActionTable');
    const additionalData = wrap.find('.additionalCombatData');
    it('should start with default starting combat values', () => {
      expect(gunActionsTable.text()).toEqual('Gun1111');
      expect(handActionsTable.text()).toEqual('Hand1111');
      expect(additionalData.text()).toEqual('BS 3MS 6DB 1');
    });
    it('should update body armour card and total weight when helmet selected', () => {
      wrap.find('.helmetBodyArmour').simulate('click');
      wrap.find('.M1Row').simulate('click');
      expect(wrap.find('.helmetBodyArmour').childAt(0).text()).toBe('M1');
      expect(wrap.find('.helmetBodyArmour').childAt(1).text()).toBe('2.5');
      expect(wrap.find('.navEquipWeight').text()).toBe('total lbs 7.5');
    });
    it('should update body armour card and total weight when vest selected', () => {
      wrap.find('.vestBodyArmour').simulate('click');
      wrap.find('.M69Row').simulate('click');
      expect(wrap.find('.vestBodyArmour').childAt(0).text()).toBe('M69');
      expect(wrap.find('.vestBodyArmour').childAt(1).text()).toBe('8.5');
      expect(wrap.find('.navEquipWeight').text()).toBe('total lbs 16');
    });
    it('should update combat stats', () => {
      expect(gunActionsTable.text()).toEqual('Gun1011');
      expect(handActionsTable.text()).toEqual('Hand1011');
      expect(additionalData.text()).toEqual('BS 2MS 4DB 1');
    });
    it('should be able to remove armour', () => {
      wrap.find('.helmetBodyArmour').simulate('click');
      wrap.find('.removeBodyArmour').simulate('click');
      expect(wrap.find('.helmetBodyArmour').childAt(0).text()).toBe('No Helmet');
      expect(wrap.find('.helmetBodyArmour').childAt(1).text()).toBe('0');
      expect(additionalData.text()).toEqual('BS 2.5MS 5DB 1');
    });
  });
});
