import React from 'react';
import { mount } from 'enzyme';
import FirearmFilter from './index';

const handleSetFilterByType = jest.fn();

describe('filter weapons by type', () => {
  const wrapper = mount(<FirearmFilter handleSetFilterByType={handleSetFilterByType} />);
  it('should have a default of all', () => {
    expect(wrapper.find('.selectAllFilter').hasClass('checked')).toBe(true);
  });
  it('should select rifles when appropraite button clicked', () => {
    wrapper.find('.selectRiflesFilter').simulate('click');
    expect(wrapper.find('.selectRiflesFilter').hasClass('checked')).toBe(true);
  });
  it('should select pistols when appropraite button clicked', () => {
    wrapper.find('.selectPistolsFilter').simulate('click');
    expect(wrapper.find('.selectPistolsFilter').hasClass('checked')).toBe(true);
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectSMGsFilter').simulate('click');
    expect(wrapper.find('.selectSMGsFilter').hasClass('checked')).toBe(true);
  });
  it('should select machineguns when appropraite button clicked', () => {
    wrapper.find('.selectMGsFilter').simulate('click');
    expect(wrapper.find('.selectMGsFilter').hasClass('checked')).toBe(true);
  });
  it('should select sub-machineguns when appropraite button clicked', () => {
    wrapper.find('.selectShotgunsFilter').simulate('click');
    expect(wrapper.find('.selectShotgunsFilter').hasClass('checked')).toBe(true);
  });
  it('should select sniper rifles when appropraite button clicked', () => {
    wrapper.find('.selectSniperRiflesFilter').simulate('click');
    expect(wrapper.find('.selectSniperRiflesFilter').hasClass('checked')).toBe(true);
  });
  it('should select all when appropraite button clicked', () => {
    wrapper.find('.selectAllFilter').simulate('click');
    expect(wrapper.find('.selectAllFilter').hasClass('checked')).toBe(true);
  });
});

describe('filter weapons by caliber', () => {
  const wrapper = mount(<FirearmFilter handleSetFilterByType={handleSetFilterByType} />);
  it('should have a default of all calibers', () => {
    expect(wrapper.find('.selectAllCalibersFilter').hasClass('checked')).toBe(true);
  });
  it('should select 7.62mm NATO when appropraite button clicked', () => {
    wrapper.find('.select762mmNATOFilter').simulate('click');
    expect(wrapper.find('.select762mmNATOFilter').hasClass('checked')).toBe(true);
  });
  it('should select 5.56mm NATO when appropraite button clicked', () => {
    wrapper.find('.select556mmNATOFilter').simulate('click');
    expect(wrapper.find('.select556mmNATOFilter').hasClass('checked')).toBe(true);
  });
  it('should select 7.62mm x 39 when appropraite button clicked', () => {
    wrapper.find('.select762x39mmFilter').simulate('click');
    expect(wrapper.find('.select762x39mmFilter').hasClass('checked')).toBe(true);
  });
  it('should select 5.45mm x 39.5 when appropraite button clicked', () => {
    wrapper.find('.select545x395mmFilter').simulate('click');
    expect(wrapper.find('.select545x395mmFilter').hasClass('checked')).toBe(true);
  });
  it('should select 9mm Parabellum when appropraite button clicked', () => {
    wrapper.find('.select9mmParabellumFilter').simulate('click');
    expect(wrapper.find('.select9mmParabellumFilter').hasClass('checked')).toBe(true);
  });
  it('should select other non-specified calibers when appropraite button clicked', () => {
    wrapper.find('.selectOtherCaliberFilter').simulate('click');
    expect(wrapper.find('.selectOtherCaliberFilter').hasClass('checked')).toBe(true);
  });
  it('should select all calibers when appropraite button clicked', () => {
    wrapper.find('.selectAllCalibersFilter').simulate('click');
    expect(wrapper.find('.selectAllCalibersFilter').hasClass('checked')).toBe(true);
  });
});
